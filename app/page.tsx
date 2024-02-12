import Image from "next/image";
import React from "react";
import logo from "@/public/logo.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const page = () => {
  return (
    <div className="h-full">
      <div className="h-full flex justify-center items-center ">
        <div className="flex flex-col items-center space-y-4">
          <Image src={logo} alt="logo" />
          <h1 className="mt-5 text-7xl text-indigo-600 font-bold">
            Welcome Finance Go
          </h1>
          <div>
            <Button size="lg">
              <Link href="/dashboard">Go Dashboard</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
