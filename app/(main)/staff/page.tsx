"use client";
import { useEffect, useState } from "react";
import axios from "axios";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PostsPagination from "@/components/posts/PostsPagination";
import BackButton from "@/components/BackButton";

interface ReviewProp {
  id: number;
  title: string;
  body: string;
}
const Staff = () => {
  const [staff, setStaff] = useState<ReviewProp[]>([]);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/posts");
        const { posts } = response.data;
        console.log(posts);
        setStaff(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchStaff();
  }, []);

  return (
    <div className="p-5">
      <div className="">
        <BackButton text="Back" link="/dashboard" />
      </div>
      <h1 className="text-3xl font-bold mb-5">Staff Report</h1>

      <Table>
        <TableCaption>Staff Report Page</TableCaption>
        <TableHeader className="bg-gray-200">
          <TableRow>
            <TableHead className="text-orange-500">Title</TableHead>

            <TableHead className="">Report</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {staff?.map((p) => (
            <TableRow key={p.id}>
              <TableCell>{p.title}</TableCell>
              <TableCell>{p.body}</TableCell>
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

export default Staff;
