import React from 'react';
import Link from 'next/link';

interface Car {
  name: string;
  slug: string;
}

const FeaturedCar: React.FC<{ car: Car }> = ({ car }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-xl font-semibold">{car.name}</h3>
      <Link href={`/cars/${car.slug}`} className="text-blue-500">
        View Details
      </Link>
    </div>
  );
};

export default FeaturedCar;
