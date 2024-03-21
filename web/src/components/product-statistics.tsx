import React, {useState} from 'react';
import { Search, CheckCircle2, XCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { ProductStats } from '@/models/ProductStats';

interface Props {
    productStats: Array<ProductStats>
}
export const ProductStatistics = ({productStats}: Props): JSX.Element => {
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const max_page = Math.ceil(productStats.length / perPage);
    const changePage = (direction: boolean) => {
        if(direction && page < max_page){
            setPage(page + 1);
        } else if(!direction && page > 1) {
            setPage(page - 1);
        }
    }
    return (
        <div className="order-11 col-span-12 2xl:order-1 card 2xl:col-span-12">
        <div className="card-body">
            <div className="grid items-center grid-cols-1 gap-3 mb-5 xl:grid-cols-12">
                <div className="xl:col-span-3">
                    <h6 className="text-15">Products Statistics</h6>
                </div>
            </div>
    
            <div className="-mx-5 overflow-x-auto">
                <table className="w-full whitespace-nowrap">
                    <thead className="ltr:text-left rtl:text-right bg-slate-100 text-slate-500 dark:text-zink-200 dark:bg-zink-600">
                        <tr>
                            <th className="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-y border-slate-200 dark:border-zink-500 w-10">
                                <div className="flex items-center h-full">
                                    <input id="productsCheckAll" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" />
                                </div>
                            </th>
                            <th className="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-y border-slate-200 dark:border-zink-500">Products</th>
                            <th className="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-y border-slate-200 dark:border-zink-500">Price</th>
                            <th className="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-y border-slate-200 dark:border-zink-500">Sales</th>
                            <th className="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-y border-slate-200 dark:border-zink-500">View</th>
                            <th className="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-y border-slate-200 dark:border-zink-500">Click</th>
                            <th className="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-y border-slate-200 dark:border-zink-500">Click (%)</th>
                            <th className="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-y border-slate-200 dark:border-zink-500">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productStats.filter((product, index) => Math.floor(index/perPage) == (page-1)).map((product, index) => (
                            <tr key={product.productName}>
                            <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                                <div className="flex items-center h-full">
                                    <input id="productsCheck1" className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" />
                                </div>
                            </td>
                            <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">{product.productName}</td>
                            <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">{product.productPrice.toLocaleString('en-US',{
                                style: 'currency',
                                currency: 'USD'
                            })}</td>
                            <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">{product.productSales.toLocaleString('en-US',{
                                style: 'currency',
                                currency: 'USD'
                            })}</td>
                            <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">{product.productView.toLocaleString('en-US')}</td>
                            <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">{product.productClick.toLocaleString('en-US')}</td>
                            <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">{product.productClickPercentage.toLocaleString('en-US', {
                                style: 'percent'
                            })}</td>
                            <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                                {product.productStatus == "Unavailable" && <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-red-100 border-transparent text-red-500 dark:bg-red-500/20 dark:border-transparent"><XCircle className="size-3 ltr:mr-1 rtl:ml-1" /> {product.productStatus}</span> }
                                {product.productStatus == "Available" && <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent"><CheckCircle2 className="size-3 ltr:mr-1 rtl:ml-1" /> {product.productStatus}</span> }
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col items-center mt-5 md:flex-row">
                <div className="mb-4 grow md:mb-0">
                    <p className="text-slate-500 dark:text-zink-200">Showing Page <b>{page}</b> of <b>{max_page}</b></p>
                </div>
                <ul className="flex flex-wrap items-center gap-2 shrink-0">
                    <li>
                        <button onClick={(event) => changePage(false)} className="inline-flex items-center justify-center bg-white dark:bg-zink-700 h-8 px-3 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-500/10 [&.active]:border-custom-50 dark:[&.active]:border-custom-500/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto"><ChevronLeft className="mr-1 size-4 rtl:rotate-180" /> Prev</button>
                    </li>
                    
                    <li>
                        <button onClick={(event) => changePage(true)} className="inline-flex items-center justify-center bg-white dark:bg-zink-700 h-8 px-3 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-500/10 [&.active]:border-custom-50 dark:[&.active]:border-custom-500/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">Next <ChevronRight className="ml-1 size-4 rtl:rotate-180" /></button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    );
}