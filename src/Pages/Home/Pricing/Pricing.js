import React from 'react';
import Loading from '../../../components/Loading/Loading';
import './Pricing.css';
import { useQuery } from '@tanstack/react-query'
import { useLocation, useNavigate } from 'react-router-dom';
import UseOrder_info from '../../../Hooks/UseOrder_info';
const Pricing = () => {
  const orderInfo =UseOrder_info()
  console.log(orderInfo?.plan)
  const path= useLocation();
  const navigate = useNavigate()
  const { isLoading, data:plans, } = useQuery(['plan'], () =>
    fetch('http://localhost:5000/pricing/plan').then(res =>
      res.json()
    )
  )
  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <section className="container mx-auto px-5 py-12 my-5">
      
     {path.pathname === '/'? <h3 className="text-center my-5 signika text-[40px]">Pricing</h3>:
     <h3 className="text-center my-5 signika text-[40px]">Choose Plan</h3>
     }
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5 lg:gap-[60px]">
        { plans?.map((pricing) => {
          return (
            <div key={pricing?._id} className="col bg-pricing p-1">
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
                {path.pathname === '/'? <>
                {orderInfo?.plan || <button onClick={()=>navigate('/pricing')}  className="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm opacity-100 mt-5 lg:mt-0 md:mt-0">
                  Buy Now
                </button>}
                {orderInfo?.plan&& <button disabled={orderInfo?.plan} className="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm opacity-100 mt-5 lg:mt-0 md:mt-0">
                  ready booked plan
                </button>}
                </> :<button onClick={()=>navigate(`/purchase/${pricing._id}`)} className="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm opacity-100 mt-5 lg:mt-0 md:mt-0">
                  choose plan
                </button>

                }
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
