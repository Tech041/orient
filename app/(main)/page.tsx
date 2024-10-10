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

export default function Home() {
  return (
    <div className="h-screen overflow-scroll overflow-x-hidden">
      <div className="flex flex-col lg:flex-row justify-evenly gap-5 mb-5 ">
        <DashboardCard
          title="Patients"
          count={1030}
          icon={<IoPerson className="text-white" size={40} />}
        />
        <Link href="/appointment">
          {" "}
          <DashboardCard
            title="Appointments"
            count={322}
            icon={<GrSchedules className="text-white" size={40} />}
          />
        </Link>
        <DashboardCard
          title="Revenue"
          count={75000}
          icon={<MdOutlineAttachMoney className="text-white" size={40} />}
        />
      </div>
      <AnalyticsChart />
      <DashboardTable />
      <Appointment />
    </div>
  );
}
