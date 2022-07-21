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
    <section className="container mx-auto px-5 my-5">
      <h3 className="text-center my-5 signika text-[40px]">Pricing</h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
        {pricings?.map((pricing) => {
          return (
            <div key={pricing?.id} className="col bg-pricing p-5">
              <h3 className="text-center text-[24px] signika">
                {pricing?.plan}
              </h3>
              <p className="text-xl text-center my-2">
                $ <span className="font-[500] text-xl">{pricing?.price}</span>
              </p>
              <div className="pl-[70px]">
                <ul className="list-disc">
                  {pricing?.services.map((service) => (
                    <li className="mt-2 text-[16px]">{service}</li>
                  ))}
                </ul>
              </div>
              <div className="text-center my-5">
                <button className="w-2/6 bg-[#3F9FFF] p-2 rounded-[10px]">
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
