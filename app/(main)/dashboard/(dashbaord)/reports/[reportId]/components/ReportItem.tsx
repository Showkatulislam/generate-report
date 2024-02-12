import { cn } from "@/lib/utils";

interface reportItemProps {
  title: string;
  description: string;
}
const ReportItem = ({ title, description }: reportItemProps) => {
  return (
    <div className={cn("grid grid-cols-12 text-blue-800 font-bold p-1")}>
      <p className="col-span-3">{title}</p>
      <p className="col-span-9">{description}</p>
    </div>
  );
};

export default ReportItem;
