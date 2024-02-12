import ReportTitle from "@/components/ReportTitle";
import ReportItem from "./ReportItem";

const CompanyDetail = () => {
  return (
    <div className="flex flex-col space-y-2">
      <ReportTitle title="COMPANY DETAILS" />
      <div>
        <ReportItem title="Denomination" description="" />
        <ReportItem title="Address" description="" />
        <ReportItem title="Tel" description="" />
        <ReportItem
          title="Fax
"
          description=""
        />
        <ReportItem title="Mobile" description="" />
        <ReportItem title="E-mail" description="" />
        <ReportItem title="Website" description="" />
      </div>
    </div>
  );
};

export default CompanyDetail;
