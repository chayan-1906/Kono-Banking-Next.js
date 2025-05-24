'use client';

import React, {useState} from "react";
import {axiosClient} from "@/lib/axiosClient";
import {apis} from "@/lib/apis";
import {ErrorMessage, Field, Form, Formik, FormikHelpers} from "formik";
import * as yup from "yup";
import {toast} from "react-toastify";
import Image from "next/image";
import CustomAuthButton from "@/components/reusable/CustomAuthButton";
import CustomLink from "@/components/reusable/CustomLink";
import routes from "@/lib/routes";

function LoginPage() {
    const initialValues = {
        email: '',
        password: '',
    };
    type FormValues = typeof initialValues;
    const [isLoading, setIsLoading] = useState(false);

    const validationSchema = yup.object({
        email: yup.string().email('Email address must be valid').required('Email is required'),
        password: yup.string().required('Password is required'),
    });

    const onSubmitHandler = async (values: FormValues, helpers: FormikHelpers<FormValues>) => {
        try {
            const response = await axiosClient.post(apis.loginApiUrl(), values);
            const responseData = await response.data;
            console.log('responseData:', responseData);

            toast.success(responseData.message);
            helpers.resetForm();
        } catch (error: any) {
            console.error('Error in login onSubmitHandler:', error);
            toast.error(error.response?.data?.error?.message || error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <div className={'min-h-[80vh] flex items-center justify-center'}>
                <div className={'w-full sm:w-[70%] md:w-[80%] flex gap-4 border rounded-md'}>
                    <div className={'hidden md:block'}>
                        <Image src={'https://bfsi.eletsonline.com/wp-content/uploads/2023/07/Yono-SBI.jpg'} alt={'logo'} height={1000} width={1000}
                               className={'w-full h-full object-cover rounded-md'}/>
                    </div>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmitHandler}>
                        <Form className={'w-full lg:w-1/2 p-10 rounded-md'}>
                            <div className={'flex flex-col gap-y-4 mb-4'}>
                                <div>
                                    <Field type={'email'} name={'email'} placeholder={'Enter your email address...'} className={'w-full p-3 rounded-md border outline-none'}/>
                                    <ErrorMessage name={'email'} className={'text-destructive'} component={'p'}/>
                                </div>
                                <div>
                                    <Field type={'password'} name={'password'} placeholder={'Enter your password...'} className={'w-full p-3 rounded-md border outline-none'}/>
                                    <ErrorMessage name={'password'} className={'text-destructive'} component={'p'}/>
                                </div>
                            </div>

                            <div className={'mb-4'}>
                                {/*<button className={'w-full py-2 bg-rose-600 rounded-md text-center text-white text-lg font-semibold tracking-wide'}>Login</button>*/}
                                <CustomAuthButton isLoading={isLoading} text={'Login'}/>
                            </div>

                            <div className={'flex justify-end gap-1'}>
                                <span>Don't have an account?</span>
                                <CustomLink href={routes.registerPath} text={'Register'} className={'text-rose-600'}/>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
