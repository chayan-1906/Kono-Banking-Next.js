'use client';

import React, {useState} from "react";
import {axiosClient} from "@/lib/axiosClient";
import {apis} from "@/lib/apis";

function LoginPage() {
    const [states, setStates] = useState({
        name: '',
        email: '',
        password: '',
        acc_type: '',
    });

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setStates({
            ...states,
            [e.target.name]: e.target.value,
        });
    }

    const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axiosClient.post(apis.registerApiUrl(), states);
            const responseData = await response.data;
            console.log('responseData:', responseData);
        } catch (error: any) {
            console.error('Error in login onSubmitHandler:', error);
        }
    }

    return (
        <>
            <div className={'min-h-[80vh] flex items-center justify-center'}>
                <form onSubmit={onSubmitHandler} className={'w-1/2 p-10 border'}>
                    <div className={'flex flex-col gap-y-4 mb-4'}>
                        <input type={'text'} name={'name'} value={states.name} onChange={onChangeHandler} className={'w-full p-3 rounded-md border outline-none'}/>
                        <input type={'email'} name={'email'} value={states.email} onChange={onChangeHandler} className={'w-full p-3 rounded-md border outline-none'}/>
                        <input type={'password'} name={'password'} value={states.password} onChange={onChangeHandler} className={'w-full p-3 rounded-md border outline-none'}/>
                        <select id={''} name={'acc_type'} value={states.acc_type} onChange={onChangeHandler} className={'w-full p-3 rounded-md border outline-none'}>
                            <option value={''}>Select Account Type</option>
                            <option value={'savings'}>Savings</option>
                            <option value={'current'}>Current</option>
                        </select>
                    </div>

                    <div className={'mb-4'}>
                        <button className={'w-full py-2 bg-rose-600 rounded-md text-center text-white text-lg font-semibold tracking-wide'}>Login</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default LoginPage;
