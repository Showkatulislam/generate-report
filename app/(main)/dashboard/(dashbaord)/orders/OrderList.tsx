"use client"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useModal } from "@/hooks/modeStore";
import { OrderWithClientAndProduct } from "@/types/types";
import { Client, Product } from "@prisma/client";
import { Edit, Trash } from "lucide-react";

interface OrderListProps{
    orders:OrderWithClientAndProduct[]|null,
    products:Product[] | null
    clients:Client[] | null
}
const OrderList = ({orders,products,clients}:OrderListProps) => {
    const {onOpen}=useModal()
    console.log(orders);
    return (
        <Table className="border p-4 shadow-sm">
        <TableCaption>A list of your recent Order.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>client Name</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Delete</TableHead>
            <TableHead>Edit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders?.map((order) => (
            <TableRow key={order.id}>
             <TableCell>
                {order?.client?.name}
             </TableCell>
             <TableCell>
                {order?.product?.productName}
             </TableCell>
             <TableCell>
                {order?.dob}
             </TableCell>
             <TableCell>
                {order?.priority}
             </TableCell>
              <TableCell>
                <Trash onClick={()=>onOpen("deleteOrder",{id:order.id})} className="text-rose-600" 
                />
              </TableCell>
              <TableCell>
                <Edit
                  onClick={() => onOpen("editOrder", {order,products,clients })}
                  className="text-blue-600"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
};

export default OrderList;