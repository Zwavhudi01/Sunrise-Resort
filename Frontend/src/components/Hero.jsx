import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[url('/assets/images/sunrise.jpg')] h-96 flex items-center justify-center text-center text-white">
      <div>
        <h1 className="text-5xl font-bold">Welcome to Sunrise Resort</h1>
        <p className="mt-4 text-xl">Relax, unwind, and enjoy your perfect getaway</p>
        <button className="mt-6 px-6 py-3 bg-orange-500 rounded hover:bg-orange-600">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default Hero;