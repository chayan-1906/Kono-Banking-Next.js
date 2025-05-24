import React from "react";
import Navbar from "@/components/Navbar";

function MainLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            <Navbar/>
        {children}
        </>
    );
}

export default MainLayout;
