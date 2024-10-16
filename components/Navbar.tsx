"use client";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeToggler from "@/components/ThemeToggler";
import { useState } from "react";
const liStyle = "text-xl font-semibold py-4 px-4";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" fixed w-full  z-40  bg-black  dark:bg-slate-700 text-white py-2 px-5 ">
      <div className="container">
        <div className="  flex justify-between ">
          {" "}
          <Link
            className="text-white font-bold text-xl flex  justify-center items-center"
            href="/"
          >
            {/* <Image src="/logo.png" alt="TraversyPress" height={40} width={40} />? */}
            <h1 className={liStyle}> Orient</h1>
          </Link>
          <div className="flex items-center">
            <ThemeToggler />
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-none">
                <Avatar>
                  <AvatarImage
                    src="https://media.istockphoto.com/id/1344779917/vector/medical-center-hospital-building-vector-design.jpg?s=612x612&w=0&k=20&c=_sZByueZhEZbK2WjQz1jqXy1_Rr5jYkgiVBj-2ls44s="
                    alt="Orient Image"
                  />
                  <AvatarFallback className="text-black">ORT</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/auth">Logout</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="md:hidden ml-5 z-50" onClick={() => setOpen(!open)}>
              {open ? (
                <MdOutlineClose size={25} color="black" />
              ) : (
                <GiHamburgerMenu size={25} />
              )}
            </div>
            <nav
              className={`w-full  h-screen  absolute  top-0  bg-gray-300   transition-all duration-300 ease-in ${
                open ? "top-0" : "top-[-2000%]"
              }`}
            >
              <ul
                className="text-black mt-5 pt-10"
                onClick={() => setOpen(!open)}
              >
                <Link href="/">
                  <li className={liStyle}>Dashboard</li>
                </Link>
                <Link href="/doctors">
                  <li className={liStyle}>Doctors</li>
                </Link>
                <Link href="/pharmacists">
                  <li className={liStyle}>Pharmacists</li>
                </Link>
                <Link href="/nurses">
                  <li className={liStyle}>Nurses</li>
                </Link>
                <Link href="/revenue">
                  <li className={liStyle}>Revenue</li>
                </Link>
                <Link href="/expenditure">
                  <li className={liStyle}>Expenditure</li>
                </Link>
                <Link href="/staff">
                  <li className={liStyle}>Staff</li>
                </Link>
                <Link href="/reviews">
                  <li className={liStyle}>Reviews</li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
