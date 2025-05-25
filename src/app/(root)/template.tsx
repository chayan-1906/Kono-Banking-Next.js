'use client';

import React, {useEffect} from "react";
import {useMainContext} from "@/context/MainContext";
import {usePathname, useRouter} from "next/navigation";
import routes from "@/lib/routes";
import {Menu, MenuItem, Sidebar} from "react-pro-sidebar";
import Loader from "@/components/reusable/Loader";
import {useDispatch, useSelector} from "react-redux";
import {setIsToggle, SidebarSlicePath} from "@/slice/sidebarSlice";
import Link from "next/link";
import {UrlObject} from "node:url";
import {MdDashboard} from "react-icons/md";
import {GiFalloutShelter} from "react-icons/gi";

function RootTemplate({children}: { children: React.ReactNode }) {
    const {user, isLoading} = useMainContext();
    // const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const pathName = usePathname();
    const isToggle = useSelector(SidebarSlicePath);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('isLoading inside useEffect:', isLoading);
        if (!user && !isLoading) {
            console.log('user:', user);
            router.replace(routes.loginPath);
        }
    }, [router, user, isLoading]);

    if (isLoading) {
        return (
            <div className={'flex items-center justify-center min-h-screen'}>
                <Loader/>
            </div>
        );
    }

    const CustomMenu = ({link, text, Icon}: { link: string | UrlObject; text: string; Icon: React.ElementType }) => {
        return (
            <MenuItem component={<Link href={link}/>} style={{background: pathName === link ? '#C60036' : '#FFF', color: pathName === link ? 'white' : 'black'}} icon={<Icon/>}>{text}</MenuItem>
        );
    }

    return (
        <>
            <section className={'flex items-start'}>
                <Sidebar breakPoint={'lg'} toggled={isToggle} onBackdropClick={() => dispatch(setIsToggle(false))}>
                    <Menu className={'bg-white min-h-screen lg:min-h-[90vh]'}>
                        <CustomMenu link={routes.homePath} text={'Home'} Icon={MdDashboard}/>
                        <CustomMenu link={routes.profilePath} text={'Profile'} Icon={GiFalloutShelter}/>
                    </Menu>
                </Sidebar>
                <main className={'px-1 md:p-3 w-full'}>
                    {children}
                </main>
            </section>
        </>
    );
}

export default RootTemplate;
