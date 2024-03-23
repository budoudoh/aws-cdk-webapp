'use client'
import { ProductStatistics } from "@/components/product-statistics";
import { AnalyticsTotals } from "@/components/analytics-totals";
import product_stats from "../data/product-stats.json";
import { useStore } from '@/store/store' 
import { useState, useEffect, useRef } from 'react'
import { PageInteractions } from "@/components/page-interactions";
import { UserDevices } from "@/components/user-devices";
import { UniqueVisitors } from "@/components/unique-visitors";
import { AnalyticsStats } from "@/models/AnalyticsStats";
import { PageInteraction } from "@/models/PageInteraction";
import { ProductStats } from "@/models/ProductStats";
import { UniqueVisitor } from "@/models/UniqueVisitor";
import { UserDevice } from "@/models/UserDevice";

export default function AnalyticsDashboard() {
  const pageInteractions = useStore((state) => state.pageInteractions);
  const userDevices = useStore((state) => state.userDevices);
  const uniqueVisitors = useStore((state) => state.uniqueVisitors);
  const analytics = useStore((state) => state.analytics);
  const productStats = useStore((state) => state.productStats);
  const initState = useStore((state) => state.initState);

  useEffect(() => {
    initState();
  }, [initState])

  return (
    <div className="mx-5">
      <div className="grid grid-cols-12">
        <img className="grid-span-12 w-[50px]" src="images/aws_cdk.jpeg"/>
        <h2 className="text-25 grid-span-2">AW(s) - Cute Dancing Kittens</h2>
      </div>
      <div className="grid grid-cols-12 gap-x-5">
          <AnalyticsTotals analytics={analytics} className="col-span-12"/>
          <PageInteractions pageStats={pageInteractions} className="order-7 col-span-12 2xl:order-1 card 2xl:col-span-5"/>
          <UniqueVisitors uniqueVisitorStats={uniqueVisitors} className="order-8 col-span-12 2xl:order-1 card 2xl:col-span-5" />
          <UserDevices userDeviceStats={userDevices} className="order-9 col-span-12 lg:col-span-6 2xl:order-1 card 2xl:col-span-2" />
          <ProductStatistics productStats={productStats} />
      </div>
    </div>
  );
}
