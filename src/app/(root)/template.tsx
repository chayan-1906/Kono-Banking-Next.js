'use client';

import React, {useEffect, useState} from "react";
import {useMainContext} from "@/context/MainContext";
import {useRouter} from "next/navigation";
import routes from "@/lib/routes";
import Loader from "@/components/reusable/Loader";

function RootTemplate({children}: { children: React.ReactNode }) {
    const {user} = useMainContext();
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            console.log('user:', user);
            router.replace(routes.loginPath);
        }
    }, [router, user]);

    if (isLoading) {
        return (
            <div className={'flex items-center justify-center min-h-screen'}>
                <Loader/>
            </div>
        );
    }

    return (
        <div>
            {children}
        </div>
    );
}

export default RootTemplate;
