import CarCard from '@/components/CarCard';
import React from 'react';

const ExploreCarPage = async () => {
    const res  = await fetch(`http://localhost:5000/explore`);
    const cars = await res.json();
    console.log(cars,"cars");
    return (
        <div className='w-11/12 mx-auto'>
            <h2>Explore Cars</h2>
            <div className='grid grid-cols-3 gap-7'>
                {
                    cars.map((car)=><CarCard key={car._id} car={car}></CarCard>)
                }
            </div>
        </div>
    );
};

export default ExploreCarPage;