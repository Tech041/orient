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
import PostsPagination from "@/components/posts/PostsPagination";
import BackButton from "@/components/BackButton";

interface DoctorsProp {
  id: number;
  username: string;
  password: string;
  gender: string;
  email: string;
  university: string;
}
const Doctors = () => {
  const [doctors, setDoctors] = useState<DoctorsProp[]>([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        const { users } = response.data;
        console.log(users);
        setDoctors(users);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className="p-5">
      <BackButton text="Back" link="/dashboard" />
      <h1 className="text-3xl font-bold mb-5">All Doctors</h1>
      <Table>
        <TableCaption>Doctors Page</TableCaption>
        <TableHeader className="bg-gray-200">
          <TableRow>
            <TableHead className="text-orange-500">Username</TableHead>
            <TableHead className="text-orange-500">Password</TableHead>

            <TableHead className="">Gender</TableHead>

            <TableHead className="">Email</TableHead>
            <TableHead className="">Graduated from</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {doctors?.map((p) => (
            <TableRow key={p.id}>
              <TableCell>{p.username}</TableCell>
              <TableCell>{p.password}</TableCell>

              <TableCell>{p.gender}</TableCell>

              <TableCell className="">{p.email}</TableCell>
              <TableCell className="">{p.university}</TableCell>
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

export default Doctors;
