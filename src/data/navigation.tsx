import React, {ReactNode} from "react";
import {ActivityLogIcon, DashboardIcon} from "@radix-ui/react-icons";
import {AirplayIcon, AlarmCheckIcon, AlignCenterIcon, UserPlus2Icon} from "lucide-react";

export const IconWrapper: React.FC<{ icon: React.ReactNode; size: number }> = ({ icon, size }) => (
    <div className="icon-wrapper font-thin" style={{ fontSize: size }}>
        {icon}
    </div>
);

export interface SubRoute {
    name: string;
    path: string;
    icon: ReactNode; // Use ReactNode type for JSX elements
}

export interface NavRouteTypes {
    header: string;
    subRoutes: SubRoute[];
}

export const navRoutes  = [
    {
        header: 'Dashboard',
        subRoutes: [
            {
                name: 'Dashboard',
                path: '/dashboard',
                icon: <DashboardIcon width={24} height={24}/>,
            },
            {
                name: 'Add Transaction',
                path: '/add/transaction',
                icon: <ActivityLogIcon width={24} height={24}/>,
            },
        ],
    },
    {
        header: 'Add',
        subRoutes: [
            {
                name: 'Add Category',
                path: '/add/category',
                icon: <AirplayIcon width={24} height={24}/>,
            },
            {
                name: 'Add Sub Category',
                path: '/add/sub-category',
                icon: <AlarmCheckIcon width={24} height={24}/>,
            },
            {
                name: 'Add Account',
                path: '/add/account',
                icon: <AirplayIcon width={24} height={24}/>,

            },
            {
                name: 'Add Payee',
                path: '/add/payee',
                icon: <UserPlus2Icon width={24} height={24}/>,
            },
            {
                name: 'Add Budget',
                path: '/add/budget',
                icon: <AlignCenterIcon width={24} height={24}/>,
            },
            {
                name: 'Add Goal',
                path: '/add/goal',
                icon: <DashboardIcon width={24} height={24}/>,
            },
            {
                name: 'Add Reminder',
                path: '/add/reminder',
                icon: <DashboardIcon width={24} height={24}/>,
            },
            {
                name: 'Add Report',
                path: '/add/report',
                icon: <DashboardIcon width={24} height={24}/>,
            },
            {
                name: "Add Subscriptions",
                path: '/add/subscriptions',
                icon: <DashboardIcon width={24} height={24}/>,
            }
        ]
    },

    {
        header: 'Show',
        subRoutes: [
            {
                name: "Show All Transactions",
                path: '/show/all/transactions',
                icon: <DashboardIcon width={24} height={24}/>,
            },
            {
                name: "Show All Categories",
                path: '/show/all/categories',
                icon: <DashboardIcon width={24} height={24}/>,
            },
            {
                name: "Show All Sub Categories",
                path: '/show/all/sub-categories',
                icon: <DashboardIcon width={24} height={24}/>,
            },
            {
                name: "Show All Accounts",
                path: '/show/all/accounts',
                icon: <DashboardIcon width={24} height={24}/>,
            },
            {
                name: "Show All Payees",
                path: '/show/all/payees',
                icon: <DashboardIcon width={24} height={24}/>,
            },
        ]
    },
]