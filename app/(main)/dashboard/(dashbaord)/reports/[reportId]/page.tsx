import React from "react";
import Report from "./components/Report";
import { GetReportById } from "@/actions/GetReportById";

const Page = async ({ params }: { params: { reportId: string } }) => {
  const report = await GetReportById(params.reportId);
  return (
    <div className="lg:m-6">
      <div >
      <Report />
      </div>
    </div>
  );
};

export default Page;
