import React from 'react';
import SEWP from '.././assets/SEWP.png';
import Seaport from '.././assets/Seaport.jpg';
import TwoGIT from '.././assets/2GIT.png';
import CHESS from '.././assets/ADMC.png';
import GSA from '.././assets/GSA.jpg';
import ITES from '.././assets/ITES.png';

const ContractsSection = () => {
  // You'll add your actual contract logo images here
  const contracts = [
    { name: 'SEWP V', logo: SEWP },
    { name: 'Seaport', logo: Seaport },
    { name: '2GIT', logo: TwoGIT },
    { name: 'CHESS', logo: CHESS },
    { name: 'GSA', logo: GSA },
    { name: 'ITES', logo: ITES },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-12">
          Our contracts
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {contracts.map((contract, index) => (
            <div key={index} className="w-32 h-32 flex items-center justify-center">
              <img 
                src={contract.logo} 
                alt={contract.name}
                className="max-w-full max-h-full object-contain transition-all duration-300"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/150x150?text=${contract.name}`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContractsSection;