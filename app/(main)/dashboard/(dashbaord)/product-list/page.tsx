import { Title } from "@/components/Title";
import { ShowProduct } from "./ShowProduct";
import { GetProduct } from "@/actions/GetProduct";


const page =async() => {

    const products=await GetProduct()
    return (
        <div className="h-full flex justify-center items-center">
            <div className="max-w-3xl">
            <Title title="Product List"/>
            <ShowProduct products={products}/>
            </div>
        </div>
    );
};

export default page;