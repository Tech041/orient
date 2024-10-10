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

const invoices = [
  {
    id: 1,
    patient: "Mary Harry",
    department: "Obstetrics",
    date: "23/4/2024",
    status: "stable",
    bill: "$ 300",
  },
  {
    id: 2,
    patient: "Greg Cole",
    department: "Orthopedic",
    date: "8/5/2024",
    status: "critical",
    bill: "$ 200",
  },
  {
    id: 3,
    patient: "Hills Plamer",

    department: "Emergency",
    date: "23/6/2024",
    status: "severe",
    bill: "$ 1300",
  },
  {
    id: 4,
    patient: "Tim Heckel",

    department: "Paediatrics",
    date: "30/10/2024",
    status: "chronic",
    bill: "$600",
  },
  {
    id: 5,
    patient: "Howl web",

    department: "Urology",
    date: "1/11/2024",
    status: "terminal",
    bill: "$ 1000",
  },
  {
    id: 6,
    patient: "Fred Hawk",

    department: "Psychiatry",
    date: "12/11/2024",
    status: "unstable",
    bill: "$ 600",
  },
  {
    id: 7,
    patient: "Philip John",

    department: "Emergency",
    date: "23/12/2024",
    status: "stable",
    bill: "$ 500",
  },
];

const Appointment = () => {
  return (
    <div className="">
      <h1 className="text-2xl text-center font-bold py-5">
        Latest Appointments
      </h1>
      <Table >
        <TableCaption>Appointments</TableCaption>
        <TableHeader className="bg-gray-200">
          <TableRow>
            <TableHead className="font-bold text-green-600">
              Patient Name
            </TableHead>

            <TableHead className="w-[100px] text-purple-800">
              Department
            </TableHead>
            <TableHead className="text-orange-500">Date Admitted</TableHead>
            <TableHead className="text-blue-500">Medical Status</TableHead>
            <TableHead className="text-right  text-yellow-700 ">
              Medical Bill
            </TableHead>
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
              <TableCell className="text-right">{invoice.bill}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow className="relative">
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="  absolute right-0 ">$4,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};
export default Appointment;
