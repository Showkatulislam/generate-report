import { Title } from "@/components/Title";
import { Showclient } from "./ShowClient";
import GetClients from "@/actions/GetClients";

const page = async () => {

  const clients = await GetClients()
  return (
    <div className="h-full flex justify-center items-center">
      <div className="max-w-5xl">
        <Title title="Client List"/>
        <Showclient clients={clients} />
      </div>
    </div>
  );
};

export default page;
