import ReportTitle from "@/components/ReportTitle";
import ReportItem from "./ReportItem";
import CapitalItem from "./CapitalItem";

export const SummaryInfo = () => {
  return (
    <div className="flex flex-col space-y-2">
      <ReportTitle title="SUMMARY" />
      <div>
        <ReportItem title="Credit rating" description="6 - Acceptable risk" />
        <ReportItem title="Payments Experience" description="Regular" />
        <CapitalItem title="Recommended outstanding" capital="TND" text="" />
        <CapitalItem title="Equivalent to" capital="TND" text="" />
      </div>
    </div>
  );
};
