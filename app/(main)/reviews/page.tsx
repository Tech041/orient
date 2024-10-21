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

interface ReviewProp {
  id: number;
  postId: number;
  body: string;
  likes: number;
}
const Reviews = () => {
  const [review, setReview] = useState<ReviewProp[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/comments");
        const { comments } = response.data;
        console.log(comments);
        setReview(comments);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="p-5">
       <div className="">
        <BackButton text="Back" link="/dashboard"/>
      </div>
      <h1 className="text-3xl font-bold mb-5">All Reviews</h1>

      <Table>
        <TableCaption>Comment Page</TableCaption>
        <TableHeader className="bg-gray-200">
          <TableRow>
            <TableHead className="text-orange-500">Comment ID</TableHead>

            <TableHead className="">Comment</TableHead>

            <TableHead className="">Likes</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {review?.map((p) => (
            <TableRow key={p.id}>
              <TableCell>{p.postId}</TableCell>
              <TableCell>{p.body}</TableCell>

              <TableCell>{p.likes}</TableCell>
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

export default Reviews;
