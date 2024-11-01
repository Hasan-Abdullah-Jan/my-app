import React from 'react';
import Navbar from './components/Navbar';
import FeaturedCar from './components/FeaturedCar';




interface Car {
  name: string;
  slug: string;
}

const HomePage: React.FC = () => {
  const featuredCars: Car[] = [
    { name: 'Toyota Corolla', slug: 'toyota-corolla' },
    { name: 'Honda Civic', slug: 'honda-civic' },
  ];

  return (
    <div className="bg-white text-black p-8 text-center">
      <Navbar />
      <section className="hero bg-blue-600 p-20 text-white">
        <h1 className="text-4xl font-bold">Welcome to the Car Selling Website</h1>
        <p className="text-lg mt-4">Your dream car is just a click away!</p>
        <p><h1>IT-Class Home-Work Simple-Car-Website</h1></p>

      </section>
      <section className="featured-cars p-10">
        <h2 className="text-2xl mb-4">Featured New Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {featuredCars.map((car) => (
            <FeaturedCar key={car.slug} car={car} />
          ))}
     
  );
};

export default HomePage;
