import ReportTitle from "@/components/ReportTitle";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export const CommercialData = () => {
  return (
    <div>
      <ReportTitle title="COMMERCIAL DATA"/>
      <Table>
        <TableBody className="font-semibold">
          <TableRow className="border-none">
            <TableCell>Import</TableCell>
            <TableCell>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
              recusandae sed deserunt sit corporis obcaecati explicabo. Quae
              nisi molestiae delectus omnis odit illo quod eum corporis
              recusandae perferendis neque earum nam, error reprehenderit
              consectetur! Sint deserunt rem necessitatibus molestiae delectus
              provident perspiciatis doloribus ratione
            </TableCell>
          </TableRow>
          <TableRow className="border-none">
            <TableCell>Suppliers Local</TableCell>
            <TableCell>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
              recusandae sed deserunt sit corporis obcaecati explicabo. Quae
              nisi molestiae delectus omnis odit illo quod eum corporis
              recusandae perferendis neque earum nam, error reprehenderit
              consectetur! Sint deserunt rem necessitatibus molestiae delectus
              provident perspiciatis doloribus ratione
            </TableCell>
          </TableRow>
          <TableRow className="border-none">
            <TableCell>Export</TableCell>
            <TableCell>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
              recusandae sed deserunt sit corporis obcaecati explicabo. Quae
              nisi molestiae delectus omnis odit illo quod eum corporis
              recusandae perferendis neque earum nam, error reprehenderit
              consectetur! Sint deserunt rem necessitatibus molestiae delectus
              provident perspiciatis doloribus ratione
            </TableCell>
          </TableRow>
          <TableRow className="border-none">
            <TableCell>Clients Loca</TableCell>
            <TableCell>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
              recusandae sed deserunt sit corporis obcaecati explicabo. Quae
              nisi molestiae delectus omnis odit illo quod eum corporis
              recusandae perferendis neque earum nam, error reprehenderit
              consectetur! Sint deserunt rem necessitatibus molestiae delectus
              provident perspiciatis doloribus ratione
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
