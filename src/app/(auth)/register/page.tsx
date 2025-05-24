'use client';

import React, {useState} from "react";
import {axiosClient} from "@/lib/axiosClient";
import {apis} from "@/lib/apis";
import * as yup from 'yup';
import {ErrorMessage, Field, Form, Formik, FormikHelpers} from "formik";
import {toast} from "react-toastify";
import Image from "next/image";
import CustomAuthButton from "@/components/reusable/CustomAuthButton";
import routes from "@/lib/routes";
import CustomLink from "@/components/reusable/CustomLink";

function RegisterPage() {
    const initialValues = {
        name: '',
        email: '',
        password: '',
        acc_type: '',
    };
    type FormValues = typeof initialValues;
    const [isLoading, setIsLoading] = useState(false);

    const validationSchema = yup.object({
        name: yup.string().required('Name is required'),
        email: yup.string().email('Email address must be valid').required('Email is required'),
        password: yup.string().required('Password is required'),
        acc_type: yup.string().oneOf(['savings', 'current'], 'Account should be valid').required('Account type is required'),
    });

    const onSubmitHandler = async (values: FormValues, helpers: FormikHelpers<FormValues>) => {
        try {
            const response = await axiosClient.post(apis.registerApiUrl(), values);
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
                                    <Field type={'text'} name={'name'} placeholder={'Enter your name...'} className={'w-full p-3 rounded-md border outline-none'}/>
                                    <ErrorMessage name={'name'} className={'text-destructive'} component={'p'}/>
                                </div>
                                <div>
                                    <Field type={'email'} name={'email'} placeholder={'Enter your email address...'} className={'w-full p-3 rounded-md border outline-none'}/>
                                    <ErrorMessage name={'email'} className={'text-destructive'} component={'p'}/>
                                </div>
                                <div>
                                    <Field type={'password'} name={'password'} placeholder={'Enter your password...'} className={'w-full p-3 rounded-md border outline-none'}/>
                                    <ErrorMessage name={'password'} className={'text-destructive'} component={'p'}/>
                                </div>
                                <Field as={'select'} id={''} name={'acc_type'} className={'w-full p-3 rounded-md border outline-none'}>
                                    <option value={''} disabled={true}>Select Account Type</option>
                                    <option value={'savings'}>Savings</option>
                                    <option value={'current'}>Current</option>
                                </Field>
                            </div>

                            <div className={'mb-4'}>
                                {/*<button className={'w-full py-2 bg-rose-600 rounded-md text-center text-white text-lg font-semibold tracking-wide'}>Register</button>*/}
                                <CustomAuthButton isLoading={isLoading} text={'Register'}/>
                            </div>

                            <div className={'flex justify-end gap-1'}>
                                <span>Already have an account?</span>
                                <CustomLink href={routes.loginPath} text={'Login'} className={'text-rose-600'}/>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    );
}

export default RegisterPage;
