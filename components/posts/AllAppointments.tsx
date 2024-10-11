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
    paymentStatus: "pending",
    bill: "$ 300",
  },
  {
    id: 2,
    patient: "Greg Cole",
    department: "Orthopedic",
    date: "8/5/2024",
    status: "critical",
    paymentStatus: "paid",
    bill: "$ 200",
  },
  {
    id: 3,
    patient: "Hills Plamer",

    department: "Emergency",
    date: "23/6/2024",
    status: "severe",
    paymentStatus: "unpaid",
    bill: "$ 1300",
  },
  {
    id: 4,
    patient: "Tim Heckel",

    department: "Paediatrics",
    date: "30/10/2024",
    status: "chronic",
    paymentStatus: "paid",
    bill: "$600",
  },
  {
    id: 5,
    patient: "Howl web",

    department: "Urology",
    date: "1/11/2024",
    status: "terminal",
    paymentStatus: "pending",
    bill: "$ 1000",
  },
  {
    id: 6,
    patient: "Fred Hawk",

    department: "Psychiatry",
    date: "12/11/2024",
    status: "unstable",
    paymentStatus: "unpaid",
    bill: "$ 600",
  },
  {
    id: 7,
    patient: "Philip John",

    department: "Emergency",
    date: "23/12/2024",
    status: "stable",
    paymentStatus: "paid",
    bill: "$ 500",
  },
  {
    id: 8,
    patient: "Persy siems",
    department: "Obstetrics",
    date: "6/2/2025",
    status: "unstable",
    paymentStatus: "pending",
    bill: "$ 500",
  },
  {
    id: 9,
    patient: "Cole Johnson",
    department: "Orthopedic",
    date: "8/2/2025",
    status: "critical",
    paymentStatus: "unpaid",
    bill: "$ 1200",
  },
  {
    id: 10,
    patient: "Michael Foster",

    department: "Urology",
    date: "15/2/2025",
    status: "stable",
    paymentStatus: "paid",
    bill: "$ 100",
  },
  {
    id: 11,
    patient: "Henry Scholes",

    department: "Paediatrics",
    date: "19/2/2025",
    status: "chronic",
    paymentStatus: "paid",
    bill: "$600",
  },
  {
    id: 12,
    patient: "Tem Hang",

    department: "Emergency",
    date: "21/2/2025",
    status: "terminal",
    paymentStatus: "unpaid",
    bill: "$ 300",
  },
  {
    id: 13,
    patient: "Nick Oclas",

    department: "Orthopaedics",
    date: "12/3/2025",
    status: "unstable",
    paymentStatus: "pending",
    bill: "$ 1200",
  },
  {
    id: 14,
    patient: "Niel Tesla",
    department: "Emergency",
    date: "2/5/2025",
    status: "unstable",
    paymentStatus: "paid",
    bill: "$ 7500",
  },
  {
    id: 15,
    patient: "Mary Harry",
    department: "Obstetrics",
    date: "23/5/2025",
    status: "stable",
    paymentStatus: "pending",
    bill: "$ 300",
  },
  {
    id: 16,
    patient: "Greg Cole",
    department: "Orthopedic",
    date: "24/5/2025",
    status: "critical",
    paymentStatus: "paid",
    bill: "$ 200",
  },
  {
    id: 17,
    patient: "Hills Plamer",

    department: "Emergency",
    date: "27/5/2025",
    status: "severe",
    paymentStatus: "unpaid",
    bill: "$ 1300",
  },
  {
    id: 18,
    patient: "Tim Heckel",

    department: "Paediatrics",
    date: "3/6/2025",
    status: "chronic",
    paymentStatus: "pending",
    bill: "$600",
  },
  {
    id: 19,
    patient: "Howl web",

    department: "Urology",
    date: "1/7/2025",
    status: "terminal",
    paymentStatus: "pending",
    bill: "$ 1000",
  },
  {
    id: 20,
    patient: "Fred Hawk",

    department: "Psychiatry",
    date: "12/7/2025",
    status: "unstable",
    paymentStatus: "pending",
    bill: "$ 600",
  },
  {
    id: 21,
    patient: "Philip John",

    department: "Emergency",
    date: "23/7/2025",
    status: "stable",
      paymentStatus: "pending",
    bill: "$ 500",
  },
];

const AllAppointment = () => {
  return (
    <div className="">
      <h1 className="text-2xl text-center font-bold py-5">All Appointments</h1>
      <Table>
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
            <TableHead className="text-blue-500">Payment Status</TableHead>

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
              <TableCell>{invoice.paymentStatus}</TableCell>

              <TableCell className="text-right">{invoice.bill}</TableCell>
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
    </div>
  );
};
export default AllAppointment;
