import React from "react";
import Navbar from "@/components/Navbar";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {MainContextProvider} from "@/context/MainContext";

function MainLayout({children}: { children: React.ReactNode }) {
    return (
        <MainContextProvider>
            <ToastContainer/>
            <Navbar/>
        {children}
        </MainContextProvider>
    );
}

export default MainLayout;
