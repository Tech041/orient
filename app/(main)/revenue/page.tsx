import BackButton from "@/components/BackButton";
import React from "react";
import { revenue } from "@/data/revenue";
import PostsPagination from "@/components/posts/PostsPagination";
import Link from "next/link";

const accordionStyles = "flex  justify-between gap-10 py-2 border-2 px-6 ";
const thStyles = "flex-1 text-start";
const Revenue = () => {
  return (
    <section className="">
      <div className="">
        <BackButton text="Back" link="/" />
      </div>
      <div className="flex justify-center ">
        <table>
          <thead>
            <tr className={accordionStyles}>
              <th className={thStyles}>Department</th>
              <th className={`${{ thStyles }}   hidden md:block`}>
                1st quarter
              </th>
              <th className={`${{ thStyles }} hidden md:block`}>2nd quarter</th>
              <th className={`${{ thStyles }} hidden md:block`}>3rd quarter</th>
              <th className={`${{ thStyles }} hidden md:block`}>4th quarter</th>
              <th className={`${{ thStyles }} `}>Comment</th>
            </tr>
          </thead>
          <tbody>
            {revenue.map((exp) => (
              <tr key={exp.id} className={accordionStyles}>
                <td className="flex-1 capitalize">{exp.department}</td>
                <td className="flex-1 capitalize hidden md:block">
                  $ {exp.first}
                </td>
                <td className="flex-1 capitalize hidden md:block">
                  ${exp.second}
                </td>
                <td className="flex-1 capitalize hidden md:block">
                  ${exp.third}
                </td>
                <td className="flex-1 capitalize hidden md:block">
                  ${exp.fourth}
                </td>

                <td className="flex-1 capitalize">{exp.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className=" py-3">
        <PostsPagination />
      </div>
      <div className="flex justify-center py-5">
        <Link href="/income" className="text-orange-600 font-semibold">
          View chart
        </Link>
      </div>
    </section>
  );
};

export default Revenue;
