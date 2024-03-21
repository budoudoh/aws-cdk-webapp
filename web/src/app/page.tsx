'use client'
import Image from "next/image";
import { ProductStatistics } from "@/components/product-statistics";
import { AnalyticsTotals } from "@/components/analytics-totals";
import { Kanban, Users, Cog, ListFilter, Coins, MoveRight, Info } from "lucide-react";
import product_stats from "../data/product-stats.json";
import analytics_stats from "../data/analytics-totals.json";
import page_stats from "../data/page-interactions.json";
import device_stats from "../data/user-devices.json";
import unique_stats from "../data/unique-visitors.json";
import { LocationBasedResponseTimes } from "@/components/location-based-response-times";
import { PageInteractions } from "@/components/page-interactions";
import { UserDevices } from "@/components/user-devices";
import { UniqueVisitors } from "@/components/unique-visitors";

export default function AnalyticsDashboard() {
  return (
    <div className="mx-5">
      <div className="grid grid-cols-12">
        <img className="grid-span-12 w-[50px]" src="images/aws_cdk.jpeg"/>
        <h2 className="text-25 grid-span-2">AW(s) - Cute Dancing Kitties</h2>
      </div>
      <div className="grid grid-cols-12 gap-x-5">
          <AnalyticsTotals analytics={analytics_stats} className="col-span-12"/>
          <PageInteractions pageStats={page_stats} className="order-7 col-span-12 2xl:order-1 card 2xl:col-span-6"/>
          <UniqueVisitors uniqueVisitorStats={unique_stats} className="order-8 col-span-12 2xl:order-1 card 2xl:col-span-6" />
          <UserDevices userDeviceStats={device_stats} className="order-9 col-span-12 lg:col-span-6 2xl:order-1 card 2xl:col-span-4" />
          <div className="order-9 col-span-12 lg:col-span-6 2xl:order-1 card 2xl:col-span-4">
              <div className="card-body">
                  <div className="flex items-center gap-2 mb-3">
                      <h6 className="text-15 grow">Satisfaction Level <a href="#!" data-tooltip="default" data-tooltip-content="The 1-to-5 satisfaction scale is used for measuring customer satisfaction" className="inline-block align-middle ltr:ml-1 rtl:mr-1 text-slate-500 dark:text-zink-200"><i data-lucide="info" className="size-4"></i></a></h6>
                      <div className="relative dropdown shrink-0">
                          <button type="button" className="flex items-center justify-center size-[30px] p-0 bg-white text-slate-500 btn hover:text-slate-500 hover:bg-slate-100 focus:text-slate-500 focus:bg-slate-100 active:text-slate-500 active:bg-slate-100 dark:bg-zink-700 dark:hover:bg-slate-500/10 dark:focus:bg-slate-500/10 dark:active:bg-slate-500/10 dropdown-toggle" id="satisfactionRateDropdown" data-bs-toggle="dropdown">
                              <i data-lucide="more-vertical" className="inline-block size-4"></i>
                          </button>
                  
                          <ul className="absolute z-50 hidden py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600" aria-labelledby="satisfactionRateDropdown">
                              <li>
                                  <a className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" href="#!">1 Weekly</a>
                              </li>
                              <li>
                                  <a className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" href="#!">1 Monthly</a>
                              </li>
                              <li>
                                  <a className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" href="#!">3 Monthly</a>
                              </li>
                              <li>
                                  <a className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" href="#!">6 Monthly</a>
                              </li>
                              <li>
                                  <a className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" href="#!">This Yearly</a>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div id="satisfactionRate" className="apex-charts" data-chart-colors='["bg-custom-500"]' dir="ltr"></div>
                  <p className="text-center text-15 text-slate-500 dark:text-zink-200">Based on Likes 💖</p>
              </div>
          </div>
          <div className="col-span-12 lg:col-span-6 order-[15] 2xl:order-1 card 2xl:col-span-4">
              <div className="card-body">
                  <div className="flex items-center gap-4 mb-3">
                      <h6 className="text-15 grow">Traffic Source</h6>
                      <a href="#!" className="underline transition-all duration-200 ease-linear text-custom-500 hover:text-custom-700">See More</a>
                  </div>
                  <div className="flex flex-col gap-5">
                      <div>
                          <div className="flex items-center justify-between gap-4 mb-2">
                              <h6>Google</h6>
                              <span className="text-slate-500 dark:text-zink-200">54,963</span>
                          </div>
                          <div className="w-full h-3.5 rounded bg-slate-200 dark:bg-zink-600">
                              <div className="h-3.5 rounded bg-custom-500 w-[89%]"></div>
                          </div>
                      </div>
                      <div>
                          <div className="flex items-center justify-between gap-4 mb-2">
                              <h6>Social Media</h6>
                              <span className="text-slate-500 dark:text-zink-200">54,963</span>
                          </div>
                          <div className="w-full h-3.5 rounded bg-slate-200 dark:bg-zink-600">
                              <div className="h-3.5 rounded bg-yellow-500 w-[81%]"></div>
                          </div>
                      </div>
                      <div>
                          <div className="flex items-center justify-between gap-4 mb-2">
                              <h6>Direct Message</h6>
                              <span className="text-slate-500 dark:text-zink-200">54,963</span>
                          </div>
                          <div className="w-full h-3.5 rounded bg-slate-200 dark:bg-zink-600">
                              <div className="h-3.5 rounded bg-green-500 w-[63%]"></div>
                          </div>
                      </div>
                      <div>
                          <div className="flex items-center justify-between gap-4 mb-2">
                              <h6>Others</h6>
                              <span className="text-slate-500 dark:text-zink-200">54,963</span>
                          </div>
                          <div className="w-full h-3.5 rounded bg-slate-200 dark:bg-zink-600">
                              <div className="h-3.5 rounded bg-slate-500 dark:text-zink-500 w-[25%]"></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <ProductStatistics productStats={product_stats} />
          
      </div>
    </div>
  );
}
