import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiHeart } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { IoIosSpeedometer } from "react-icons/io";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { SiFueler } from "react-icons/si";

const CarCard = ({ car }) => {
  const {_id, brand, model, speed, rating, category, seats, image, transmission, fuel, description, pricePerDay, available} = car;
  return (
    <div className="h-full">
      <Card className="h-full flex flex-col ">
        <div className="relative aspect-square">
          <Image
            src={image}
            alt={`${brand}${model}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-xl b"
          ></Image>
    <Chip size="sm" className="absolute px-2 top-2 left-2">{available === "true" ? (
    <h2 className="text-green-600 bg-green-100 px-2 py-1 rounded">Available</h2>) :
     (<h2 className="text-red-600 bg-red-100 px-2 py-1 rounded">Unavailable</h2>
  )}
</Chip>
        <p className="absolute px-2 top-2 right-2 text-pink-700"><BiHeart/></p>
        </div>

        <div className="flex justify-between items-center  min-h-15 space-x-2">
          <h2 className="font-bold text-xl">{`${brand} ${model}`}</h2>
          <h3 className="flex items-center py-0.5 rounded-md px-2 bg-gray-100 mr-6"><span className="flex font-semibold text-lg items-center gap-1"><FaStar className="text-yellow-400" />{rating}</span>(129)</h3>
          <p><span className="font-bold text-xl">${pricePerDay}</span>/day</p>
        </div>
        <div className="flex justify-between items-center">
            <p className="flex items-center gap-1"><SiFueler className="text-blue-500"/>{fuel}</p>
            <p className="flex items-center gap-1"><MdOutlineAirlineSeatReclineExtra className="text-blue-500"/>{seats} seater</p>
            <p className="flex items-center gap-1"><IoIosSpeedometer className="text-blue-500"/>{speed}</p>
        </div>
       <Link href={`/explore/${_id}`}> <Button className={'w-full'}>View Details</Button></Link>
      </Card>
    </div>
  );
};

export default CarCard;
