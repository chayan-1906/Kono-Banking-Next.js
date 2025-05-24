import React from "react";
import Link from "next/link";
import Logo from "@/components/reusable/Logo";
import routes from "@/lib/routes";

function Navbar() {
    return (
        <header className={'w-full border-b rounded-b-md'}>
            <nav className={'flex items-center justify-between w-[98%] lg:w-[80%] mx-auto py-3'}>
                <Logo/>
                <ul className={'flex items-center justify-center gap-x-2'}>
                    <li>
                        <Link href={routes.homePath}>Home</Link>
                    </li>
                    <li>
                        <Link href={routes.servicesPath}>Services</Link>
                    </li>
                    <li>
                        <Link href={routes.aboutPath}>About</Link>
                    </li>
                    <li>
                        <Link href={routes.contactPath}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
