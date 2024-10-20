import DashboardCard from "@/components/dashboard/DashboardCard";
import PostsTable from "@/components/posts/Appointment";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";
import DashboardTable from "@/components/DashboardTable";
import { IoPerson } from "react-icons/io5";
import { GrSchedules } from "react-icons/gr";
import { MdOutlineAttachMoney } from "react-icons/md";
import Appointment from "@/components/posts/Appointment";
import Link from "next/link";
import GeneralIndicator from "@/components/dashboard/GeneralIndicator";

export default function Home() {
  return (
    <div className="h-auto mt-10">
      <div className=" text-4xl text-center py-5">Healthcare System</div>
      <div className="h-auto bg-slate-500 shadow-2xl py-5">
        <h2 className="py-2 px-4 text-green-400 text-2xl font-semibold">Welcome, Admin</h2>
        <h3 className=" text-orange-500 px-4 pb-3">Start with remaining appointments</h3>
        <div className="flex flex-col lg:flex-row justify-evenly gap-5 mb-5 ">
          <Link href="/doctors">
            <DashboardCard
              title="Scheduled appointments"
              count={103}
              // icon={<IoPerson className="text-white" size={40} />}
            />
          </Link>
          <Link href="/patients">
            {" "}
            <DashboardCard
              title="Pending appointments"
              count={32}
              // icon={<GrSchedules className="text-white" size={40} />}
            />
          </Link>
          <Link href="/expenditure">
            <DashboardCard
              title="Cancelled appointments"
              count={7000}
              // icon={<MdOutlineAttachMoney className="text-white" size={40} />}
            />
          </Link>
        </div>
      </div>
      <AnalyticsChart />
      <DashboardTable />
      <Appointment />
      <GeneralIndicator />
    </div>
  );
}
