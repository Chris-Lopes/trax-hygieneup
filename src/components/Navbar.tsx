"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

type IconProps = React.SVGProps<SVGSVGElement>;

function MenuIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function UserIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function PlusIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function SearchIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

const Navbar: React.FC = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const checkSignin = () => {
    setIsSignedIn(true);
  };

  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="md:flex-row items-center md:w-2/3 w-full gap-4 md-gap-0 justify-between flex flex-col">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold"
              prefetch={false}
            >
              HygieneUp
            </Link>
          </div>
          <div className="relative flex-1 max-w-md ">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for stores or cuisines"
              className="pl-10 pr-4 py-2 rounded-full text-black bg-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {isSignedIn ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-black"
              >
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Admin</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="#footer">Contact Us</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="https://foscos.fssai.gov.in/consumergrievance/">
                  My Complaints
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setIsSignedIn(false)}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="items-center gap-4 hidden md:block">
            <Button variant="ghost" onClick={checkSignin}>
              <UserIcon className="w-5 h-5 mr-2 " />
              Sign in
            </Button>
            <Link href="/signup" passHref>
              <Button variant="ghost">
                <PlusIcon className="w-5 h-5 mr-2" />
                Sign Up
              </Button>
            </Link>
          </div>
        )}

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <MenuIcon className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="md:hidden">
            {isSignedIn ? (
              <nav className="grid gap-4 p-4">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-medium"
                  prefetch={false}
                >
                  HygieneUp
                </Link>
                <Link
                  href="https://foscos.fssai.gov.in/consumergrievance/"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  My Complaints
                </Link>
                <Link
                  href="#footer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  Contact
                </Link>
                <button
                  onClick={() => setIsSignedIn(false)}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  Log Out
                </button>
              </nav>
            ) : (
              <nav className="grid gap-4 p-4">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-medium"
                  prefetch={false}
                >
                  HygieneUp
                </Link>
                <button
                  onClick={checkSignin}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  Sign in
                </button>
                <Link
                  href="/signup"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  Sign up
                </Link>
                <Link
                  href="#footer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  Contact
                </Link>
              </nav>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
