'use client'
import Image from "next/image";
import { Sidebar } from "../components/sidebar";

export default function AnalyticsDashboard() {
  return (
    <div className="group-data-[sidebar-size=sm]:min-h-sm group-data-[sidebar-size=sm]:relative">
      <Sidebar />
    </div>
  );
}
