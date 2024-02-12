import ReportTitle from "@/components/ReportTitle";
import ReportItem from "./ReportItem";
import CapitalItem from "./CapitalItem";

export const OfficialCompanyData = () => {
  return (
    <div className="flex flex-col space-y-2">
      <ReportTitle title="OFFICIAL COMPANY DATA" />
      <div>
        <ReportItem title="Legal status" description="" />
        <ReportItem
          title="Unique identifier
"
          description=""
        />
        <ReportItem
          title="Creation date
"
          description=""
        />
        <ReportItem
          title="Start of activity
"
          description=""
        />
        <ReportItem title="Activity status" description="" />
        <CapitalItem title="Share capital" capital="TND" text="Since"/>
        <CapitalItem title="Share capital" capital="TND" text="Since"/>
      </div>
    </div>
  );
};
