import BookingCard from "@/components/BookingCard";
import { auth } from "@/lib/auth";
import { Card } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";

const BookingCarPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  const user = session?.user;
  // console.log(user, "session");
  const res = await fetch(`http://localhost:5000/carBooking/${user?.id}`);
  const bookings = await res.json();
  console.log(bookings, "data");
  

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="font-bold text-4xl text-center my-6">My Booking</h2>
      <div>
        {bookings.map((booking) => <BookingCard key={booking._id} booking={booking}/>)}
      </div>
    </div>
  );
};

export default BookingCarPage;
