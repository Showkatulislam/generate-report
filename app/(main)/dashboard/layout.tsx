import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-full">
      <div className="h-full w-80  lg:block fixed inset-y-0 hidden">
        <Sidebar/>
      </div>
      <div className="h-full lg:pl-80">{children}</div>
    </div>
  );
};

export default layout;
