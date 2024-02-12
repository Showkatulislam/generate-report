import { GetClients } from "@/actions/GetClients";
import GenerateReport from "./GenerateReport";
const page = async() => {
  const clients=await GetClients()
  return (
    <div>
      <GenerateReport clients={clients} />
    </div>
  );
};

export default page;
