import React from "react";

export interface CustomAuthButtonProps {
    isLoading: boolean;
    type?: 'submit' | 'reset' | 'button';
    className?: string
    text: string;
}

export interface CustomLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export interface DashboardProps {
    data: {
        title: string;
        icon: React.ReactElement;
        value: string;
        link: string;
    };
}
