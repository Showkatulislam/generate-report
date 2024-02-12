import Image from "next/image";
import img from "@/public/logo.svg";
const ReportHeader = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-between items-end">
        <div>
          <div className="w-44 h-40">
            <Image src={img} alt="logo" />
          </div>
        </div>
        <div className="flex flex-col space-y-2 text-right font-normal">
          <p>© Finance Go</p>
          <p>Renseignement commercial et Analyse financière</p>
          <p>email: max@financego.co.uk</p>
          <p>{new Date().toLocaleDateString()}</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-2xl">Financial report</h1>
        <h2 className="text-xl font-bold">Company</h2>
      </div>
    </div>
  );
};

export default ReportHeader;
