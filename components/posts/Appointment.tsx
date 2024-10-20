import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PostsPagination from "./PostsPagination";

const invoices = [
  {
    id: 1,
    patient: "Mary Harry",
    department: "Obstetrics",
    date: "23/4/2024",
    status: "stable",
    name: "Dr Bright",
    appointment: "scheduled",
  },
  {
    id: 2,
    patient: "Greg Cole",
    department: "Orthopedic",
    date: "8/5/2024",
    status: "critical",
    name: "Dr Huggson",
    appointment: "pending",
  },
  {
    id: 3,
    patient: "Hills Plamer",

    department: "Emergency",
    date: "23/6/2024",
    status: "severe",
    name: "Dr Brian",
    appointment: "scheduled",
  },
  {
    id: 4,
    patient: "Tim Heckel",

    department: "Paediatrics",
    date: "30/6/2024",
    status: "chronic",
    name: "Dr Gregg",
    appointment: "scheduled",
  },
  {
    id: 5,
    patient: "Howl web",

    department: "Urology",
    date: "1/7/2024",
    status: "terminal",
    name: "Dr Hills",
    appointment: "scheduled",
  },
  {
    id: 6,
    patient: "Fred Hawk",

    department: "Psychiatry",
    date: "12/7/2024",
    status: "unstable",
    name: "Dr Stan",
    appointment: "pending",
  },
  {
    id: 7,
    patient: "Philip John",

    department: "Emergency",
    date: "23/7/2024",
    status: "stable",
    name: "Dr Mullar",
    appointment: "scheduled",
  },
];

const Appointment = () => {
  return (
    <div className="">
      <h1 className="text-2xl text-center font-bold py-5">Latest Admissions</h1>
      <Table>
        <TableCaption>Admissions</TableCaption>
        <TableHeader className="bg-gray-200 w-[100%]">
          <TableRow>
            <TableHead className="font-bold text-black">Patient Name</TableHead>

            <TableHead className="w-[100px] text-black ">Department</TableHead>
            <TableHead className="text-black ">Date Admitted</TableHead>
            <TableHead className="text-black">Medical Status</TableHead>
            <TableHead className="text-black">Doctor</TableHead>

            <TableHead className="text-right text-black  ">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell>{invoice.patient}</TableCell>

              <TableCell className="font-medium">
                {invoice.department}
              </TableCell>
              <TableCell>{invoice.date}</TableCell>
              <TableCell>{invoice.status}</TableCell>
              <TableCell>{invoice.name}</TableCell>

              <TableCell className="text-right">
                {invoice.appointment}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow className="relative">
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="  absolute right-0 ">$4,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
      <div className="">
        <PostsPagination />
      </div>
    </div>
  );
};
export default Appointment;
