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

interface Props {
    pageStats: Array<PageInteraction>,
    className?: string
}
export const PageInteractions = ({pageStats, className}: Props): JSX.Element => {
    const [page, setPage] = useState(1);
    const data = {
        labels: pageStats.map((stat)=> {
            return format(stat.date+" 00:00:00", "MMMM d");
        }),
        datasets: [
            {
                label: "Page Views",
                data: pageStats.map((stat)=> {
                    return stat.pageViews;
                }),
                backgroundColor: 'rgba(59,130,246,0.85)',
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
                <h6 className="mb-3 text-15 grow">Page Views this Month</h6>
            </div>
            <Bar data={data} options={options}/>
        </div>
    </div>
    );
}