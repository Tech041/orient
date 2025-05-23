import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  LayoutDashboard,
  Newspaper,
  Folders,
  CreditCard,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="  h-screen mt-5">
      <Command className=" rounded-none">
        <CommandInput placeholder="Type a command..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <Link href="/dashboard">Dashboard</Link>
            </CommandItem>
            <CommandItem>
              <Newspaper className="mr-2 h-4 w-4" />
              <Link href="/patients">Patients</Link>
            </CommandItem>
            <CommandItem>
              <Folders className="mr-2 h-4 w-4" />
              <Link href="/doctors">Doctors</Link>
            </CommandItem>
            <CommandItem>
              <Folders className="mr-2 h-4 w-4" />
              <Link href="/pharmacists">Pharmacists</Link>
            </CommandItem>
            <CommandItem>
              <Folders className="mr-2 h-4 w-4" />
              <Link href="/nurses">Nurses</Link>
            </CommandItem>
            <CommandItem>
              <Folders className="mr-2 h-4 w-4" />
              <Link href="/expenditure">Expenditure</Link>
            </CommandItem>
            <CommandItem>
              <Folders className="mr-2 h-4 w-4" />
              <Link href="/revenue">Revenue</Link>
            </CommandItem>
            <CommandItem>
              <Folders className="mr-2 h-4 w-4" />
              <Link href="/staff">Staff Reports</Link>
            </CommandItem>
            <CommandItem>
              <Folders className="mr-2 h-4 w-4" />
              <Link href="/reviews">Reviews</Link>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export default Sidebar;
