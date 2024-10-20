import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  count?: number;
  icon?: React.ReactElement<LucideIcon>;
}

const DashboardCard = ({ title, count, icon }: DashboardCardProps) => {
  return (
    <Card className=" dark:bg-slate-800 p-4 pb-0 border-2 border-green-400">
      <CardContent>
        <h3 className=" text-center mb-4 font-bold text-black dark:text-slate-200">
          {title}
        </h3>
        <div className="flex  justify-center items-center ">
          {icon}
          <h3 className="text-5xl font-semibold text-black dark:text-slate-200">
            {count}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
