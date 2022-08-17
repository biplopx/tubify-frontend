
import React from 'react';
import UseOrder_info from '../../Hooks/UseOrder_info';
import Pricing from '../Home/Pricing/Pricing';
import Payment from '../Purchase/Payment';
const PricingPlan = () => {
    const orderInfo=UseOrder_info()
    if(!orderInfo?.plan){
        return (
            <Pricing></Pricing>
        );
    }
    else{
        return <Payment></Payment>
    }
    
}
export default PricingPlan;