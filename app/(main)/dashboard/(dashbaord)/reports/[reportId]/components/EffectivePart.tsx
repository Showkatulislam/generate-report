import ReportTitle from "@/components/ReportTitle";
import { Table,TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const EffectivePart = () => {
    return (
        <div className="flex flex-col space-y-2">
            <ReportTitle title="EFFECTIVE"/>
            <div>
                <Table>
                    <TableHeader>
                        <TableHead>
                            
                        </TableHead>
                        <TableHead>
                            2000
                        </TableHead>
                        <TableHead>
                            2000
                        </TableHead>
                        <TableHead>
                            2000
                        </TableHead>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                Effective
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};