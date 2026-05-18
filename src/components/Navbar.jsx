"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(true);
 const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold">
        🚗 CarRental
      </Link>

      {/* Nav Links */}
      <div className="flex items-center gap-6">
        <Link href="/">Home</Link>
        <Link href="/explore">Explore Cars</Link>
        <Link href="/add">Add Car</Link>
        <Link href="/booking">My Bookings</Link>
      </div>

{/* <Link href={'/login'}> <Button  className={'flex-1 py-2 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-sm uppercase rounded-lg'}>Login</Button></Link> */}
      
      <div className="relative">
        {user ? (
          <div>
          
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2"
            >
             <Link href={"/profile"}>
                    <Avatar>
                      <Avatar.Image
                        referrerPolicy="no-referrer"
                        alt={user?.name}
                        src={user?.image}
                      />
                      <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                    </Avatar>
                  </Link>
              <span className="text-sm font-medium">{user?.name}</span>
              <span><IoMenuSharp className="font-bold text-xl"/></span>
            </button>

          
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50 py-1">
                <Link
                  href="/add"
                  className="block px-4 py-2 text-sm hover:bg-gray-50"
                  onClick={() => setDropdownOpen(false)}
                >
                  Add Car
                </Link>
                <Link
                  href="/booking"
                  className="block px-4 py-2 text-sm hover:bg-gray-50"
                  onClick={() => setDropdownOpen(false)}
                >
                  My Bookings
                </Link>
                <Link
                  href="/my-added-cars"
                  className="block px-4 py-2 text-sm hover:bg-gray-50"
                  onClick={() => setDropdownOpen(false)}
                >
                  My Added Cars
                </Link>
                <hr className="my-1" />
                <button
                  onClick={handleSignOut}
                  className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-50"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link href={'/login'}> <Button className={'flex-1 py-2 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-sm uppercase rounded-lg'}>Login</Button></Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;