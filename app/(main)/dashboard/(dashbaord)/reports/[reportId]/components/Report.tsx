"use client";
import { useEffect, useRef, useState } from "react";
import CompanyDetail from "./CompanyDetail";
import { OfficialCompanyData } from "./OfficialCompanyData";
import OrderDetail from "./OrderDetail";
import ReportHeader from "./ReportHeader";
import { SharHolder } from "./SharHolder";
import { SummaryInfo } from "./SummaryInfo";
import { Managers } from "./Managers";
import { Activity } from "./Activity";
import { FinancialData } from "./FinancialData";
import { FinancailIndicator } from "./FinancailIndicator";
import FinancialChart from "./FinancialChart";
import { EffectivePart } from "./EffectivePart";
import { CommercialData } from "./CommercialData";
import { BankAndApprecation } from "./BankAndApprecation";
import { SecondaryEstablishment } from "./SecondaryEstablishment";
import { OfficailPublication } from "./OfficailPublication";
import { useReactToPrint } from "react-to-print";
import { Button } from "@/components/ui/button";
const Report = () => {
  const [mounted, isMounded] = useState(false);
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onAfterPrint() {
    console.log();
    },
  });
  useEffect(() => {
    isMounded(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <div>
      <div ref={componentRef}>
        <div className="flex flex-col space-y-4 bg-white text-black h-full px-10 py-10">
          <ReportHeader />
          <OrderDetail />
          <CompanyDetail />
          <OfficialCompanyData />
          <SummaryInfo />
          <SharHolder />
          <Managers />
          <Activity />
          <FinancialData />
          <FinancailIndicator />
          <FinancialChart />
          <EffectivePart />
          <CommercialData />
          <BankAndApprecation />
          <SecondaryEstablishment />
          <OfficailPublication />
        </div>
      </div>
      <Button onClick={handlePrint}>print</Button>
    </div>
  );
};

export default Report;
