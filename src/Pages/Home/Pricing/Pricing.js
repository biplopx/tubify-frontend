import React from 'react';
import './Pricing.css';

const Pricing = () => {
  const pricings = [
    {
      id: 1,
      plan: 'Weekly Plan',
      services: ['3 movies', ' 5 drams', '1000 songs', '20 tv series'],
    },
    {
      id: 2,
      plan: 'Monthly Plan',
      services: ['3 movies', ' 5 drams', '1000 songs', '20 tv series'],
    },
    {
      id: 3,
      plan: 'Yearly Plan',
      services: ['3 movies', ' 5 drams', '1000 songs', '20 tv series'],
    },
  ];
  return (
    <div className="w-5/6 mx-auto">
      <h3 className="text-center my-5 signika text-4xl">Pricing</h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
        {pricings?.map((pricing) => {
          return (
            <div key={pricing?.id} className="col bg-pricing p-5">
              <h3 className="text-center text-2xl">{pricing?.plan}</h3>
              <div className="px-[20px]">
                <ul className="list-disc">
                  {pricing?.services.map((service) => (
                    <li className="mt-2">{service}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
