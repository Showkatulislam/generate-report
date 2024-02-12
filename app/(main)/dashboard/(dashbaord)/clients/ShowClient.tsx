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
import { Client } from "@prisma/client";
import { Edit, Trash } from "lucide-react";
interface ShowclientProps {
  clients: Client[] |null;
}
export const Showclient = ({ clients }: ShowclientProps) => {
  const { onOpen } = useModal();
  return (
    <Table className="border p-4 shadow-sm">
      <TableCaption>A list of your recent client.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>client Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Address</TableHead>
          <TableHead>Contact1</TableHead>
          <TableHead>Contact2</TableHead>
          <TableHead>Delete</TableHead>
          <TableHead>Edit</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {clients?.map((client) => (
          <TableRow key={client.id}>
            <TableCell className="font-medium">{client.name}</TableCell>
            <TableCell>{client.email}</TableCell>
            <TableCell>{client.phone}</TableCell>
            <TableCell>{client.address}</TableCell>
            <TableCell>{client.contact1}</TableCell>
            <TableCell>{client.contact2}</TableCell>
            <TableCell>
              <Trash onClick={()=>onOpen("deleteClient",{id:client.id})} className="text-rose-600" 
              />
            </TableCell>
            <TableCell>
              <Edit
                onClick={() => onOpen("editClient", { client })}
                className="text-blue-600"
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
