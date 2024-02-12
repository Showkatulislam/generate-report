import ReportTitle from "@/components/ReportTitle";
import ReportItem from "./ReportItem";

const OrderDetail = () => {
  return (
    <div className="flex flex-col space-y-2">
      <ReportTitle title="ORDER DETAIL" />
      <div>
        <ReportItem title="Customer" description="abc" />
        <ReportItem title="Object" description="abc" />
        <ReportItem
          title="Reference
"
          description="abc"
        />
        <ReportItem title="Priority" description="abc" />
        <ReportItem title="Language" description="abc" />
        <ReportItem title="Credit requested" description="abc" />
      </div>
    </div>
  );
};

export default OrderDetail;
