import React, {useState} from 'react';
import { Search, CheckCircle2, XCircle } from "lucide-react";
import { ProductStats } from '@/models/ProductStats';

interface Props {
    locationStats: Array<ProductStats>,
    className?: string
}
export const LocationBasedResponseTimes = ({locationStats, className}: Props): JSX.Element => {
    const [page, setPage] = useState(1);
    return (
    <div className={className}>
        <div className="card-body">
            <div className="flex items-center gap-2">
                <h6 className="mb-3 text-15 grow">Location-Based Response Times</h6>
            </div>

            <div id="responseTimes" className="apex-charts" data-chart-colors='["bg-red-500"]' dir="ltr"></div>
        </div>
    </div>
    );
}