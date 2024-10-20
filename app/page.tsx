import AuthTabs from "@/components/auth/AuthTabs";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="bg-landing-image h-screen bg-cover">
      <div className="  flex justify-center items-center bg-black text-white py-4 ">
        <div className="flex-1 flex items-center px-8 font-bold text-2xl text-green-500">
          ORIENT
        </div>
        <nav className="flex-1 flex justify-end px-10 gap-10">
          <Link className="hover:text-orange-400" href="/auth">
            Get started
          </Link>
        </nav>
      </div>
      <div className="h-full flex justify-center items-center">
       <div className="">
        <h1 className=""></h1>
        </div> 
      <AuthTabs />
      </div>
    </div>
  );
};

export default Home;
