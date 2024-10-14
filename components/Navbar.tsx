import Image from "next/image";
import Link from "next/link";

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

const Navbar = () => {
  return (
    <div className=" fixed w-full  z-40  bg-black  dark:bg-slate-700 text-white py-2 px-5 ">
      <div className="container">
        <div className="flex justify-between">
          {" "}
          <Link
            className="text-white font-bold text-xl flex  justify-center items-center"
            href="/"
          >
            {/* <Image src="/logo.png" alt="TraversyPress" height={40} width={40} />? */}
            <h1 className=""> Orient</h1>
            
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
