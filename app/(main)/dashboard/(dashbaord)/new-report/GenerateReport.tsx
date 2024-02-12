"use client";
import { Client } from "@prisma/client";
import OrderDetails from "./components/OrderDetails";
import { ContactInfo } from "./components/ContactInfo";
import { OfficialInfo } from "./components/OfficialInfo";
import { CapitalInfo } from "./components/CapitalInfo";
import { ShareHolder } from "./components/ShareHolder";
import { ManagerAdd } from "./components/ManagerAdd";
import { FinancialData } from "./components/FinancialData";
import { BankInfo } from "./components/BankInfo";
import { CommercialData } from "./components/CommercialData";
import { AnalaysisModal } from "./components/AnalaysisModal";
import { useEffect, useState } from "react";
import axios from "axios";
import ReportPreview from "./components/ReportPreview";
interface GenerateReportProps {
  clients: Client[] | null;
}
const GenerateReport = ({clients }: GenerateReportProps) => {
  const [reportId,setReportId]=useState<any>()
  useEffect(() => {
    const has = localStorage.getItem("reportId");
    setReportId(has)
    if (!has) {
      const createReport = async () => {
        const report = await axios.post("/api/report");
        localStorage.setItem("reportId", report.data.id);
        setReportId(report.data.id)
      };
      createReport()
    }
  }, []);  
  return (
    <div className="m-4 border space-y-3 p-2">
      <OrderDetails reportId={reportId} clients={clients} />
      <ContactInfo reportId={reportId} />
      <OfficialInfo reportId={reportId} />
      <CapitalInfo reportId={reportId} />
      <ShareHolder reportId={reportId} />
      <ManagerAdd reportId={reportId} />
      <FinancialData reportId={reportId} />
      <BankInfo reportId={reportId} />
      <CommercialData reportId={reportId} />
      <AnalaysisModal reportId={reportId} />
      <ReportPreview reportId={reportId}/>
    </div>
  );
};

export default GenerateReport;
