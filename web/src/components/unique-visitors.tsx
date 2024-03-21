import React, {useState} from 'react';
import { PageInteraction } from '@/models/PageInteraction';
import { Chart as ChartJS, CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { format, isDate } from "date-fns"
import { UniqueVisitor } from '../models/UniqueVisitor';

interface Props {
    uniqueVisitorStats: Array<UniqueVisitor>,
    className?: string
}
export const UniqueVisitors = ({uniqueVisitorStats, className}: Props): JSX.Element => {
    const [page, setPage] = useState(1);
    const data = {
        labels: uniqueVisitorStats.map((stat)=> {
            return format(stat.date+" 00:00:00", "MMMM d");
        }),
        datasets: [
            {
                label: "Unique Visitors",
                data: uniqueVisitorStats.map((stat)=> {
                    return stat.uniqueVisitors;
                }),
                backgroundColor: 'rgba(36, 151, 130, 0.85)',
            }
        ],
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: false,
                text: 'Chart.js Bar Chart',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );
    return (
    <div className={className}>
        <div className="card-body">
            <div className="flex items-center gap-2">
                <h6 className="mb-3 text-15 grow">Unique Visitors this Month</h6>
            </div>
            <Bar data={data} options={options}/>
        </div>
    </div>
    );
}