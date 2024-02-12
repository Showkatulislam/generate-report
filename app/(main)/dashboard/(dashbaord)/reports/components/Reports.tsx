"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Report } from "@prisma/client";
import { useEffect, useState } from "react";
import { Share, View } from "lucide-react";
import Link from "next/link";
import { Title } from "@/components/Title";
interface ReportsProps {
  reports: Report[] | null;
}
const Reports = ({ reports }: ReportsProps) => {
  const [mounted, isMounded] = useState(false);
  useEffect(() => {
    isMounded(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <div className="p-4 border">
    <Title title="Report"/>
      <Table>
        <TableHeader>
          <TableHead>id</TableHead>
          <TableHead>
            <div className="flex gap-x-2">
             Preview
            </div>
          </TableHead>
          <TableHead>
           Share
          </TableHead>
        </TableHeader>
        <TableBody>
          {reports?.map((report) => (
            <TableRow key={report.id}>
              <TableCell>{report.id}</TableCell>
              <TableCell>
                <Link href={`/dashboard/reports/${report.id}`}><View /></Link>
              </TableCell>
              <TableCell>
              <Share/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Reports;
