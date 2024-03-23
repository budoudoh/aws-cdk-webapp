import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import consolidated_analytics from '../data/consolidated.json';
import { AnalyticsStats } from "@/models/AnalyticsStats";
import { PageInteraction } from "@/models/PageInteraction";
import { ProductStats } from "@/models/ProductStats";
import { UniqueVisitor } from "@/models/UniqueVisitor";
import { UserDevice } from "@/models/UserDevice";

const apiUrl = 'https://api.aws-cute-dancing-kittens.com/analytics?query=abc123';
const TTL = 30; //Measured in minutes

interface CuteDancingKittensState {
    pageInteractions: PageInteraction[];
    userDevices: UserDevice[];
    uniqueVisitors: UniqueVisitor[];
    analytics: AnalyticsStats;
    productStats: ProductStats[];
    lastUpdated: Date;
    statsLoaded: boolean;
}

interface CuteDancingKittensActions {
    initState(): void;
}

export const useStore = create<CuteDancingKittensState & CuteDancingKittensActions>()(persist((set, get) => ({
    pageInteractions: consolidated_analytics['page-views'],
    userDevices: consolidated_analytics['user-devices'],
    uniqueVisitors: consolidated_analytics['unique-visitors'],
    analytics: consolidated_analytics['analytics-totals'],
    productStats: consolidated_analytics['product-stats'],
    lastUpdated: new Date(),
    statsLoaded: false,
    initState: () => {
        let diff = (Math.abs((new Date(get().lastUpdated).getTime() - new Date().getTime()))/60000)
        if(!get().statsLoaded || diff > TTL){        
            fetch(apiUrl).then((res: Response) => {
                res.json().then((consolidated) => {
                    set({pageInteractions: consolidated['page-views']});
                    set({userDevices: consolidated['user-devices']});
                    set({uniqueVisitors: consolidated['unique-visitors']});
                    set({analytics: consolidated['analytics-totals']});
                    set({productStats: consolidated['product-stats']});
                    set({statsLoaded: true});
                })
            }); 
        }
    }
}),
{
    name: 'cute-dancing-kittens',
    storage: createJSONStorage(() => sessionStorage),
}));