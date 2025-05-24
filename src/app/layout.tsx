import React from "react";
import type {Metadata} from "next";
import {Inter_Tight} from "next/font/google";
import "./globals.css";
import MainLayout from "@/layout/MainLayout";

const interTight = Inter_Tight({
    variable: '--font-inter-tight',
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: 'Kono Banking — Modern Digital Banking Made Simple',
    description: 'A secure and responsive banking interface built with Next.js 15, enabling users to manage accounts, view transactions, and more with ease.',
};

function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang={'en'} suppressHydrationWarning>
        <body
            className={`${interTight.variable} antialiased`}
        >
        <MainLayout>
            {children}
        </MainLayout>
        </body>
        </html>
    );
}

export default RootLayout;
