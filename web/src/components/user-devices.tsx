import React, {useState} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { UserDevice } from '@/models/UserDevice';
import { Info } from "lucide-react";

interface Props {
    userDeviceStats: Array<UserDevice>,
    className?: string
}
export const UserDevices = ({userDeviceStats, className}: Props): JSX.Element => {
    const [page, setPage] = useState(1);
    const data = {
        labels: userDeviceStats.map((stat)=> {
            return stat.type;
        }),
        datasets: [
            {
                label: '# of Page Views',
                data: userDeviceStats.map((stat)=> {
                    return stat.count;
                }),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            }
        ],
    };
   
    ChartJS.register(ArcElement, Tooltip, Legend);
    return (
 
    <div className={className}>
        <div className="card-body">
            <div className="flex items-center gap-2">
                <h6 className="mb-3 text-15 grow">User Devices <a href="#!" data-tooltip="default" data-tooltip-content="You can see your number of desktop, mobile, and tablet users." className="inline-block align-middle ltr:ml-1 rtl:mr-1 text-slate-500 dark:text-zink-200"><Info className="size-4" /></a></h6>
            </div>
            <Doughnut data={data} />
        </div>
    </div>
    );
}