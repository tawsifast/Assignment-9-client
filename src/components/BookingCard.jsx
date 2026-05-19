import { Card } from "@heroui/react";
import Image from "next/image";
import React from "react";

const BookingCard = ({ booking }) => {

  return (
    <div >
      <Card className="flex flex-row gap-20 border">
        <div className="">
          <Image src={booking.image}
           alt="h"
            width={150}
            height={150}
            className="rounded-md"
            ></Image>
        </div>
        <div>
        <h2 className="font-bold text-xl">{`${booking.brand} ${booking.model}`}</h2>
        <p>${booking.pricePerDay}</p>
        <p>{booking.location}</p>
        </div>
      </Card>
    </div>
  );
};

export default BookingCard;
