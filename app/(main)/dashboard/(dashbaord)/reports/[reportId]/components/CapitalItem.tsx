import { cn } from "@/lib/utils";

interface CapitalItemProps {
  title: string;
  capital: string;
  text: string;
}
const CapitalItem = ({ text, title, capital }: CapitalItemProps) => {
  return (
    <div className={cn("grid grid-cols-12 text-blue-800 font-bold p-1")}>
      <p className="col-span-3">{title}</p>
      <p className="col-span-1">{capital}</p>
      <p className="col-span-1">{text}</p>
    </div>
  );
};

export default CapitalItem;
