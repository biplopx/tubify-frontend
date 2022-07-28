import React from 'react';
import './Pricing.css';

const Pricing = () => {
  const pricings = [
    {
      id: 1,
      plan: 'Weekly Plan',
      price: 5,
      services: [
        '3 movies',
        ' 5 drams',
        '1000 songs',
        '1 live music concert',
        '20 tv series',
      ],
    },
    {
      id: 2,
      plan: 'Monthly Plan',
      price: 7,
      services: [
        'Unlimited movies',
        'Unlimited drams',
        'Unlimited songs',
        '1 live music concert',
        '30 tv series',
      ],
    },
    {
      id: 3,
      plan: 'Yearly Plan',
      price: 30,
      services: [
        'Unlimited movies',
        'Unlimited drams',
        'Unlimited songs',
        '5 live music concerts',
        'Unlimited tv series',
      ],
    },
  ];
  return (
    <section className="container mx-auto px-5 py-12 my-5">
      <h3 className="text-center my-5 signika text-[40px]">Pricing</h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5 lg:gap-[60px]">
        {pricings?.map((pricing) => {
          return (
            <div key={pricing?.id} className="col bg-pricing p-5">
              <h3 className="text-center text-[24px] signika">
                {pricing?.plan}
              </h3>
              <p className="text-xl text-center my-2">
                $ <span className="font-[500] text-2xl">{pricing?.price}</span>
              </p>
              <div className="lg:pl-[70px] md:pl-[40px] pl-[40px]">
                <ul className="list-disc">
                  {pricing?.services.map((service, index) => (
                    <li key={index} className="mt-2 text-[16px]">{service}</li>
                  ))}
                </ul>
              </div>
              <div className="text-center my-5">
                <button className="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm opacity-100 mt-5 lg:mt-0 md:mt-0">
                  Buy Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
