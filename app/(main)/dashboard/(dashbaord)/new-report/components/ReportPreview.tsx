import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ReportProps {
  reportId: string;
}
const ReportPreview = ({ reportId }: ReportProps) => {
  return (
    <div className="flex justify-between items-center p-2 border">
      <Button className="text-white">Save Report</Button>
      <Link className="text-white" href={`/dashboard/reports/${reportId}`}>Preview</Link>
    </div>
  );
};

export default ReportPreview;
