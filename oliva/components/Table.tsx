import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const CustomTable = ({ data }: { data: any[] }) => {
  return (
    <Table>
      <TableCaption>A list of your orchards.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Orchard</TableHead>
          <TableHead>Size</TableHead>
          <TableHead>Olive trees</TableHead>
          <TableHead className="text-right">Position</TableHead>
          <TableHead></TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((orchard) => (
          <TableRow key={orchard.orchard}>
            <TableCell className="font-medium">{orchard.orchard}</TableCell>
            <TableCell>{orchard.size}</TableCell>
            <TableCell>{orchard.oliveTrees}</TableCell>
            <TableCell className="text-right">{orchard.position}</TableCell>
            <TableCell className="text-right">
              <Button size={"default"}>Delete</Button>
            </TableCell>
            <TableCell className="text-right">
              <Button size={"icon"}>Edit</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default CustomTable;
