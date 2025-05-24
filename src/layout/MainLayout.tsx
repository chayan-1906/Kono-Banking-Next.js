import React from "react";
import Navbar from "@/components/Navbar";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function MainLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            <ToastContainer/>
            <Navbar/>
        {children}
        </>
    );
}

export default MainLayout;
