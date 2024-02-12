import ReportTitle from "@/components/ReportTitle";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const BankAndApprecation = () => {
    return (
        <div className="flex flex-col space-y-2">
            <ReportTitle title="BANKS AND BANK APPRECIATION"/>
            <div>
                <Table>
                    <TableHeader>
                        <TableHead>
                        Bank
                        </TableHead>
                        <TableHead>
                        Agency
                        </TableHead>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>ddd</TableCell>
                            <TableCell>ddd</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

