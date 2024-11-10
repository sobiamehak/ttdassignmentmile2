import React from 'react';

const Plants = () => {
  return (
    <section className="bg-green-50 py-12">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        
        
        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6">
          <img src="/snakeplant.jpeg" alt="Snake Plant" className="w-full md:w-1/3 h-64 object-cover rounded-lg" />
          <div className="md:ml-8 mt-4 md:mt-0">
            <h3 className="text-2xl font-bold text-green-800">Snake Plant (Sansevieria)</h3>
            <p className="text-gray-700 mt-2">Light: Low to bright indirect light</p>
            <p className="text-gray-700 mt-1">Water: Allow the soil to dry out between watering</p>
            <p className="text-gray-700 mt-1">Description: Snake Plant is known for its tall, sword-like leaves. It's easy to care for and is perfect for improving indoor air quality.</p>
          </div>
        </div>

        
        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6">
          <img src="/monstera.webp" alt="Monstera" className="w-full md:w-1/3 h-64 object-cover rounded-lg" />
          <div className="md:ml-8 mt-4 md:mt-0">
            <h3 className="text-2xl font-bold text-green-800">Monstera (Monstera deliciosa)</h3>
            <p className="text-gray-700 mt-2">Light: Bright indirect light</p>
            <p className="text-gray-700 mt-1">Water: Keep soil moist but not soggy</p>
            <p className="text-gray-700 mt-1">Description: Known for its unique split leaves, the Monstera adds a tropical feel to any space. It loves humidity and grows quickly in bright, indirect light.</p>
          </div>
        </div>


        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6">
          <img src="/aloevera.jpeg" alt="Aloe Vera" className="w-full md:w-1/3 h-64 object-cover rounded-lg" />
          <div className="md:ml-8 mt-4 md:mt-0">
            <h3 className="text-2xl font-bold text-green-800">Aloe Vera (Aloe barbadensis miller)</h3>
            <p className="text-gray-700 mt-2">Light: Bright, direct sunlight</p>
            <p className="text-gray-700 mt-1">Water: Water sparingly; let soil dry out completely</p>
            <p className="text-gray-700 mt-1">Description: Aloe Vera is a succulent known for its medicinal properties. It has fleshy leaves and thrives in sunny areas, making it perfect for windowsills.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Plants;
