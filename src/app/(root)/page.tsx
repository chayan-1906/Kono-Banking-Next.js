import React from "react";
import {BsCoin} from "react-icons/bs";
import {DashboardProps} from "@/types";
import {IoCardSharp} from "react-icons/io5";
import {FaPiggyBank} from "react-icons/fa";
import routes from "@/lib/routes";
import CustomLink from "@/components/reusable/CustomLink";
import HeaderName from "@/components/HeaderName";

function HomePage() {
    const dashboardData = [
        {
            title: 'Amount',
            icon: <BsCoin className={'text-6xl text-yellow-600'}/>,
            value: `₹${0}`,
            link: routes.amountPath,
        },
        {
            title: 'FD Amount',
            icon: <FaPiggyBank className={'text-6xl text-rose-700'}/>,
            value: `₹${5}`,
            link: routes.fdAmountPath,
        },
        {
            title: 'ATM Cards',
            icon: <IoCardSharp className={'text-6xl text-black'}/>,
            value: `${2}`,
            link: routes.atmCardsPath,
        },
    ];

    return (
        <div className={'flex flex-col py-10 gap-y-4 w-full'}>
            <HeaderName/>
            <div className={'grid lg:grid-cols-2 xl:grid-cols-3 gap-x-3'}>
                {dashboardData.map((data, i) => {
                    return (
                        <Dashboard key={i} data={data}/>
                    );
                })}
            </div>
        </div>
    );
}

export default HomePage;

const Dashboard = ({data}: DashboardProps) => {
    const {title, icon, value, link} = data;

    return (
        <CustomLink href={link} className={'flex items-center justify-between py-3  px-10 border rounded-md hover:no-underline'}>
            {icon}
            <div className={'flex flex-col gap-2 items-end'}>
                <p className={'text-3xl font-semibold'}>{title}</p>
                <h1 className={'text-4xl font-black'}>{value}</h1>
            </div>
        </CustomLink>
    );
}
