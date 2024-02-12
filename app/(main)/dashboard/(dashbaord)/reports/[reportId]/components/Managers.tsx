import ReportTitle from "@/components/ReportTitle";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
export const Managers = () => {
    return (
        <div>
            <ReportTitle title="MANAGERS"/>
            <div>
            <Table>
          <TableHeader>
            <TableHead className="text-blue-600 font-bold">Name</TableHead>
            <TableHead className="text-blue-600 font-bold">
             Company Name
            </TableHead>
            <TableHead className="text-blue-600 font-bold">
             Function
            </TableHead>
            <TableHead className="text-blue-600 font-bold">
              Nationality
            </TableHead>
          </TableHeader>
          <TableBody>
            <TableRow className="border-none">
                <TableCell>ddd</TableCell>
            </TableRow>
            <TableRow className="border-none">
                <TableCell>ddd</TableCell>
            </TableRow>
            <TableRow className="border-none">
                <TableCell>ddd</TableCell>
            </TableRow>
          </TableBody>
        </Table>
            </div>
        </div>
    );
};

