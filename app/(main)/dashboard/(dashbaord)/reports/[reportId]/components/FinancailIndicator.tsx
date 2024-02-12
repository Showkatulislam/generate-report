import ReportTitle from "@/components/ReportTitle";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
export const FinancailIndicator = () => {
  return (
    <div>
      <ReportTitle
        title="FINANCIAL INDICATORS
"
      />
      <div>
        <Table>
          <TableBody>
            <TableRow className="border-none font-semibold">
              <TableCell>Net profitability</TableCell>
            </TableRow>
            <TableRow className="border-none font-semibold">
              <TableCell>ROE Return On Equity</TableCell>
            </TableRow>
            <TableRow className="border-none font-semibold">
              <TableCell>ROA Return On Asset</TableCell>
            </TableRow>
            <TableRow className="border-none font-semibold">
              <TableCell>Autonomy Financial</TableCell>
            </TableRow>
            <TableRow className="border-none font-semibold">
              <TableCell>EBITDA</TableCell>
            </TableRow>
            <TableRow className="border-none font-semibold">
              <TableCell>Lead time Suppliers</TableCell>
            </TableRow>
            <TableRow className="border-none font-semibold">
              <TableCell>Customer lead time</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
