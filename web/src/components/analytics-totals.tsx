import React from 'react';
import { Search, CheckCircle2, XCircle, Users, Kanban, Coins, ListFilter, Cog } from "lucide-react";
import { ProductStats } from '@/models/ProductStats';
import { AnalyticsStats } from '@/models/AnalyticsStats';

interface Props {
    analytics: AnalyticsStats,
    className?: string
}
export const AnalyticsTotals = ({analytics, className}: Props): JSX.Element => {
    return (
    <div className={className}>
        <div className='flex flex-row gap-5'>
            <div className="flex-1 bg-green-100 dark:bg-green-500/20 card group-data-[skin=bordered]:border-green-500/20 relative overflow-hidden">
                <div className="card-body">
                    <Kanban className="absolute top-0 stroke-1 size-32 text-green-200/50 dark:text-green-500/20 ltr:-right-10 rtl:-left-10"/>
                    <div className="flex items-center justify-center bg-green-500 rounded-md size-12 text-15 text-green-50">
                        <Users />
                    </div>
                    <h5 className="mt-5 mb-2"><span className="counter-value">{analytics.total_visitors.toLocaleString()}</span></h5>
                    <p className="text-slate-500 dark:text-slate-200">Total Visitors</p>
                </div>
            </div>
            <div className="flex-1  bg-orange-100 dark:bg-orange-500/20 card  group-data-[skin=bordered]:border-orange-500/20 relative overflow-hidden">
                <div className="card-body">
                    <ListFilter className="absolute top-0 stroke-1 size-32 text-orange-200/50 dark:text-orange-500/20 ltr:-right-10 rtl:-left-10" />
                    <div className="flex items-center justify-center bg-orange-500 rounded-md size-12 text-15 text-orange-50">
                        <Cog />
                    </div>
                    <h5 className="mt-5 mb-2"><span className="counter-value">{analytics.sessions.toLocaleString()}</span></h5>
                    <p className="text-slate-500 dark:text-slate-200">Sessions</p>
                </div>
            </div>
            <div className="flex-1 bg-sky-100 dark:bg-sky-500/20 card group-data-[skin=bordered]:border-sky-500/20 relative overflow-hidden">
                <div className="card-body">
                    <ListFilter className="absolute top-0 stroke-1 size-32 text-sky-200/50 dark:text-sky-500/20 ltr:-right-10 rtl:-left-10" />
                    <div className="flex items-center justify-center rounded-md size-12 bg-sky-500 text-15 text-sky-50">
                        <Coins />
                    </div>
                    <h5 className="mt-5 mb-2"><span className="counter-value">{Math.floor(analytics.avg_duration/60).toLocaleString('en-US', {
                        style: 'unit',
                        unit: 'minute'
                    })}</span> <span className="counter-value">{(analytics.avg_duration%60).toLocaleString('en-US', {
                        style: 'unit',
                        unit: 'second'
                    })}</span></h5>
                    <p className="text-slate-500 dark:text-slate-200">Avg. Visit Duration</p>
                </div>
            </div>
            <div className="flex-1 bg-purple-100 dark:bg-purple-500/20 card group-data-[skin=bordered]:border-purple-500/20 relative overflow-hidden">
                <div className="card-body">
                    <Kanban className="absolute top-0 stroke-1 size-32 text-purple-200/50 dark:text-purple-500/20 ltr:-right-10 rtl:-left-10" />
                    <div className="flex items-center justify-center bg-purple-500 rounded-md size-12 text-15 text-purple-50">
                        <Users />
                    </div>
                    <h5 className="mt-5 mb-2"><span className="counter-value">{analytics.bounce_rate.toLocaleString('en-US', {
                        style: 'percent'
                    })}</span></h5>
                    <p className="text-slate-500 dark:text-slate-200">Bounce Rate</p>
                </div>
            </div>
        </div>
    </div>
    )
}