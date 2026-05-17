import { Card } from "@heroui/react";
import Image from "next/image";
import React from "react";

const CarCard = ({ car }) => {
  const {_id, brand, model, speed, rating, category, seats, image, transmission, fuel, description, pricePerDay,} = car;
  return (
    <div>
      <Card>
        <div>
          <Image
            src={image}
            alt={`${brand} ${model} `}
            width={300}
            height={300}
          ></Image>
        </div>

        <div className="flex justify-between items-center">
          <h2>{`${brand} ${model}`}</h2>
          <h3>{rating}</h3>
          <p><span>${pricePerDay}</span>/day</p>
        </div>
        <div className="flex justify-between items-center">
            <p>{fuel}</p>
            <p>{seats} seater</p>
            <p>{speed}</p>
        </div>
      </Card>
    </div>
  );
};

export default CarCard;
