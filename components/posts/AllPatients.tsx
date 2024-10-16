"use client";
import { useEffect, useState } from "react";
import axios from "axios";

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

interface PatientProp {
  id: number;
  firstName: string;
  age: number;
  gender: string;
  bloodGroup: string;
  phone: number;
  email: string;
}
const Posts = () => {
  const [patients, setPatients] = useState<PatientProp[]>([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        const { users } = response.data;
        console.log(users);
        setPatients(users);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">Admitted Patients</h1>

      <Table>
        <TableCaption>Appointments</TableCaption>
        <TableHeader className="bg-gray-200">
          <TableRow>
            <TableHead className="text-orange-500">First Name</TableHead>

            <TableHead className="">Age</TableHead>
            <TableHead className="">Gender</TableHead>
            <TableHead className="">Blood Group</TableHead>

            <TableHead className="">Email</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {patients?.map((p) => (
            <TableRow key={p.id}>
              <TableCell>{p.firstName}</TableCell>

              <TableCell>{p.age}</TableCell>
              <TableCell>{p.gender}</TableCell>
              <TableCell className="">{p.bloodGroup}</TableCell>

              <TableCell className="">{p.email}</TableCell>
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

export default Posts;
