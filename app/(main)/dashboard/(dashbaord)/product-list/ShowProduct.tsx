"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useModal } from "@/hooks/modeStore";
import { Product } from "@prisma/client";
import { Edit, Trash } from "lucide-react";
interface ShowProductProps {
  products: Product[] |null
}
export const ShowProduct = ({ products }: ShowProductProps) => {
  const {onOpen}=useModal()
  return (
    <Table className="border p-4 shadow-sm">
      <TableCaption>A list of your recent Product.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Product Name</TableHead>
          <TableHead>Language</TableHead>
          <TableHead>Country</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Delete</TableHead>
          <TableHead>Edit</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products?.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.productName}</TableCell>
            <TableCell>{product.country}</TableCell>
            <TableCell>{product.language}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>
              <Trash onClick={()=>onOpen("deleteProduct",{id:product.id})} className="text-rose-600" />
            </TableCell>
            <TableCell>
              <Edit onClick={()=>onOpen("editProduct",{product})} className="text-blue-600" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

