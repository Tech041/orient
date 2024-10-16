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
      <div className="flex flex-col lg:flex-row justify-evenly gap-5 mb-5 ">
        <Link href="/doctors">
          <DashboardCard
            title="Active Doctors"
            // count={103}
            // icon={<IoPerson className="text-white" size={40} />}
          />
        </Link>
        <Link href="/patients">
          {" "}
          <DashboardCard
            title="Total Patients"
            // count={32}
            // icon={<GrSchedules className="text-white" size={40} />}
          />
        </Link>
        <Link href="/expenditure">
          <DashboardCard
            title="Expenditure"
            // count={7000}
            // icon={<MdOutlineAttachMoney className="text-white" size={40} />}
          />
        </Link>
      </div>
      <AnalyticsChart />
      <DashboardTable />
      <Appointment />
      <GeneralIndicator />
    </div>
  );
}
