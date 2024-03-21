import "@/assets/libs/lucide/umd/lucide.js"
import type { Metadata } from "next";
import "@/assets/css/tailwind2.css";


export const metadata: Metadata = {
  title: "AWS CDK Test Analytics Dashboard",
  description: "Sample AWS CDK Web Application",
  viewport: "width=device-width, initial-scale=1.0, user-scalable=no",
  icons: {
    icon: "./images/favicon.ico"
  },  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth group" data-layout="vertical" data-sidebar="light" data-sidebar-size="lg" data-mode="light" data-topbar="light" data-skin="default" data-navbar="sticky" data-content="fluid" dir="ltr">
      <body className="text-base bg-body-bg text-body font-public dark:text-zink-100 dark:bg-zink-800 group-data-[skin=bordered]:bg-body-bordered group-data-[skin=bordered]:dark:bg-zink-700">{children}</body>
    </html>
  );
}
