import { GetOrders } from "@/actions/GetOrders";
import OrderList from "./OrderList";
import GetProduct from "@/actions/GetProduct";
import GetClients from "@/actions/GetClients";
import { Title } from "@/components/Title";

const page = async () => {
  const orders = await GetOrders();
  const products=await GetProduct()
  const clients=await GetClients()

  return (
    <div className="h-full flex justify-center items-center">
      <div className="max-w-3xl">
         <Title title="Order List"/>
        <OrderList orders={orders} products={products} clients={clients} />
      </div>
    </div>
  );
};

export default page;
