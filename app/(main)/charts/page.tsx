import BackButton from "@/components/BackButton";
import { Chart1 } from "@/components/ChartBar";
import { QuarterlyChat } from "@/components/PieChart";
import React from "react";

const Charts = () => {
  return (
    <div className="">
       <div className="">
        <BackButton text="Back" link="/expenditure" />
      </div>
      <div className="">
        <Chart1 />
      </div>
      <div className=" my-10">
        <QuarterlyChat />
      </div>
    </div>
  );
};

export default Charts;
