"use client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);


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

      <Button>Login</Button>
      {/* <div className="relative">
        {session ? (
          <div>
          
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2"
            >
             <img src="" alt="" />
              <span className="text-sm font-medium">{session.user?.name}</span>
              <span>▾</span>
            </button>

          
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50 py-1">
                <Link
                  href="/cars/add"
                  className="block px-4 py-2 text-sm hover:bg-gray-50"
                  onClick={() => setDropdownOpen(false)}
                >
                  Add Car
                </Link>
                <Link
                  href="/bookings"
                  className="block px-4 py-2 text-sm hover:bg-gray-50"
                  onClick={() => setDropdownOpen(false)}
                >
                  My Bookings
                </Link>
                <Link
                  href="/cars/my-cars"
                  className="block px-4 py-2 text-sm hover:bg-gray-50"
                  onClick={() => setDropdownOpen(false)}
                >
                  My Added Cars
                </Link>
                <hr className="my-1" />
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-50"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            href="/login"
            className="px-4 py-2 bg-black text-white text-sm rounded"
          >
            Login
          </Link>
        )}
      </div> */}
    </nav>
  );
};

export default Navbar;