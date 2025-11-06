import React from 'react';
import SEWP from '.././assets/SEWP.png';
import Seaport from '.././assets/Seaport.jpg';
import TwoGIT from '.././assets/2GIT.png';
import CHESS from '.././assets/ADMC.png';
import GSA from '.././assets/GSA.jpg';
import ITES from '.././assets/ITES.png';
import { Link } from 'react-router-dom';

const ContractsSection = () => {
  // You'll add your actual contract logo images here
  const contracts = [
    { name: 'SEWP V', logo: SEWP, route: '/sewp' },
    { name: 'Seaport', logo: Seaport, route: '/seaport' },
    { name: '2GIT', logo: TwoGIT, route: '/2git' },
    { name: 'CHESS', logo: CHESS, route: '/admc' },
    { name: 'GSA', logo: GSA, route: '/mas' },
    { name: 'ITES', logo: ITES, route: '/ites' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#0570c6' }}>
          Our contracts
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {contracts.map((contract, index) => (
            <Link to={contract.route} key={index} className="w-32 h-32 flex items-center justify-center group">
              <img
                src={contract.logo}
                alt={contract.name}
                className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-105 cursor-pointer"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/150x150?text=${contract.name}`;
                }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContractsSection;