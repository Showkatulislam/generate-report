import ReportTitle from "@/components/ReportTitle";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
export const FinancialData = () => {
  return (
    <div>
      <ReportTitle title="FINANCIAL DATA (EXPRESSED IN TND)" />
      <div>
        <Table>
          <TableBody >
            <TableRow className="border-none font-semibold">
              <TableCell></TableCell>
            </TableRow>
            <TableRow className="border-none font-semibold">
              <TableCell>Turnover</TableCell>
            </TableRow>
            <TableRow className="border-none font-semibold">
              <TableCell>Operating profit</TableCell>
            </TableRow>
            <TableRow className="border-none font-semibold">
              <TableCell>Dowry. to amortization</TableCell>
            </TableRow>
            <TableRow className="border-none font-semibold">
              <TableCell>Equity before allocation</TableCell>
            </TableRow>
            <TableRow className="border-none font-semibold">
              <TableCell>Suppliers and Linked Account</TableCell>
            </TableRow>
            <TableRow className="border-none font-semibold">
              <TableCell>Consumed purchases</TableCell>
            </TableRow>
            <TableRow className="border-none font-semibold">
              <TableCell>Clients and associated accounts</TableCell>
            </TableRow>
            <TableRow className="border-none font-semibold">
              <TableCell>Stocks</TableCell>
            </TableRow>
            <TableRow className="border-none font-semibold">
              <TableCell>Balance sheet total</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
