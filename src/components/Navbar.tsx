'use client';

import React from "react";
import Logo from "@/components/reusable/Logo";
import routes from "@/lib/routes";
import {useMainContext} from "@/context/MainContext";
import {cn} from "@/lib/utils";
import CustomLink from "@/components/reusable/CustomLink";
import {GiHamburgerMenu} from "react-icons/gi";
import {useDispatch} from "react-redux";
import {setIsToggle} from "@/slice/sidebarSlice";

function Navbar() {
    const {user, onLogout} = useMainContext();
    const dispatch = useDispatch();

    return (
        <header className={'w-full border-b rounded-b-md'}>
            <nav className={'flex items-center justify-between w-[98%] lg:w-[80%] mx-auto py-3'}>
                <div className={'flex items-center gap-x-2'}>
                    <button className={'sm:hidden bg-gray-100 rounded-full p-2 text-xl cursor-pointer hover:bg-gray-200'} onClick={() => dispatch(setIsToggle(true))}>
                        <GiHamburgerMenu/>
                    </button>
                    <Logo/>
                </div>
                <ul className={'flex items-center justify-center gap-6'}>
                    <li>
                        <CustomLink href={routes.homePath} text={'Home'}/>
                    </li>
                    <li>
                        <CustomLink href={routes.servicesPath} text={'Services'}/>
                    </li>
                    <li>
                        <CustomLink href={routes.aboutPath} text={'About'}/>
                    </li>
                    <li>
                        <CustomLink href={routes.contactPath} text={'Contact'}/>
                    </li>
                    <li className={cn(user ? 'block' : 'hidden')}>
                        <button className={'px-3 py-1 rounded-md cursor-pointer bg-rose-700 font-semibold text-white'} onClick={onLogout}>Logout</button>
                    </li>
                    <li className={cn(user ? 'hidden' : 'block')}>
                        <CustomLink href={routes.loginPath} text={'Login'}/>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
