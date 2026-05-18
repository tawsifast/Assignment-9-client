import React from 'react';

const MyAddedCars = async() => {
    const res  = await fetch(`http://localhost:5000/listing`);
    const cars = await res.json();
    console.log(cars,"cars");
    return (
        <div>
           
        </div>
    );
};

export default MyAddedCars;