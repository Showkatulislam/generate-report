import GetProduct from "@/actions/GetProduct";
import AddOrder from "./AddOrder";
import GetClients from "@/actions/GetClients";

const page =async () => {
    const products=await GetProduct()
    const clients=await GetClients()
    return (
        <div className="h-full flex justify-center items-center">
        <div className="w-96">
          <AddOrder products={products} clients={clients} />
        </div>
      </div>
    );
};

export default page;