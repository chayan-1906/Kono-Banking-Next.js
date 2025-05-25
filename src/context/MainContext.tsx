'use client';

import React, {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {toast} from "react-toastify";
import {axiosClient, constructApiHeader} from "@/lib/axiosClient";
import {apis} from "@/lib/apis";
import Loader from "@/components/reusable/Loader";
import {useRouter} from "next/navigation";
import {clearLocalStorage} from "@/lib/utils";
import routes from "@/lib/routes";

const MainContext = createContext({
    user: null, fetchUserProfile() {
    }, onLogout() {
    },
    isLoading: false,
    setIsLoading: (_value: boolean) => {
    },
});

export const useMainContext = () => {
    return useContext(MainContext);
}

export const MainContextProvider = ({children}: { children: ReactNode }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    const fetchUserProfile = async () => {
        console.log('fetchUserProfile called');
        try {
            const response = await axiosClient.get(apis.profileUserApiUrl(), {
                headers: constructApiHeader(),
            });
            const responseData = response.data;
            console.log('responseData:', responseData.user);
            setUser(responseData.user);
            setIsLoading(false);
        } catch (error: any) {
            toast.error(error.response?.data?.message || error.message);
        } finally {
            setIsLoading(false);
        }
    }

    const onLogout = () => {
        clearLocalStorage();
        setUser(null);
        toast.success('Logout successful');
        router.replace(routes.loginPath);
    }

    useEffect(() => {
        fetchUserProfile().then(r => {
        });
    }, []);

    if (isLoading) {
        return (
            <div className={'flex items-center justify-center w-full min-h-screen'}>
                <Loader/>
            </div>
        );
    }

    return (
        <MainContext.Provider value={{user, fetchUserProfile, onLogout, isLoading, setIsLoading}}>
            {children}
        </MainContext.Provider>
    );
}
