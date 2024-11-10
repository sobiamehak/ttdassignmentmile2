import React from 'react';

const Plantgallery = () => {
  return (
    <section className="bg-green-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-green-800 text-center mb-8">Our Plant Collection</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/plant1.jpeg" alt="Plant 1" className="w-full h-48 object-cover" />
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/plant2.jpeg" alt="Plant 2" className="w-full h-48 object-cover" />
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/plant3.jpeg" alt="Plant 3" className="w-full h-48 object-cover" />
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/plant4.jpeg" alt="Plant 4" className="w-full h-48 object-cover" />
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/plant5.jpeg" alt="Plant 5" className="w-full h-48 object-cover" />
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/plant6.jpeg" alt="Plant 6" className="w-full h-48 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Plantgallery;
