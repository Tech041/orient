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

interface NursesProp {
  id: number;
  lastName: string;

  gender: string;

  email: string;
  university: string;
}
const Nurses = () => {
  const [nurses, setNurses] = useState<NursesProp[]>([]);

  useEffect(() => {
    const fetchNurses = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        const { users } = response.data;
        console.log(users);
        setNurses(users);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchNurses();
  }, []);

  return (
    <div className="p-5">
       <div className="">
        <BackButton text="Back" link="/"/>
      </div>
      <h1 className="text-3xl font-bold mb-5">All Nurses</h1>

      <Table>
        <TableCaption>Nurses Page</TableCaption>
        <TableHeader className="bg-gray-200">
          <TableRow>
            <TableHead className="text-orange-500">Last Name</TableHead>

            <TableHead className="">Gender</TableHead>

            <TableHead className="">Email</TableHead>
            <TableHead className="">Graduated from</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {nurses?.map((p) => (
            <TableRow key={p.id}>
              <TableCell>{p.lastName}</TableCell>

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

export default Nurses;
