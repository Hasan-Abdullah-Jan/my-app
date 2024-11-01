import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';

const CarDetails: React.FC = () => {
  const router = useRouter();
  const { carSlug } = router.query;

  return (
    <div className="p-10">
      <h1 className="text-3xl">Car Details: {carSlug?.toString().replace('-', ' ')}</h1>
      <p>Detailed information about the car goes here.</p>
      <Link href="/payment">
        <button className="mt-4 p-2 bg-yellow-500 text-white rounded">Make Payment</button>
      </Link>
    </div>
  );
};

export default CarDetails;
