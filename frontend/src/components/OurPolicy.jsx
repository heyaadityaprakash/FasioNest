import React from 'react';
import { icons } from '../assets/assets';
function OurPolicy() {
    return ( 
        <div className='flex flex-col sm:flex-row justify-around gap-10 sm:gap-2 text-center py-20 text-gray-800'>
            <div className='items-center '>
                <img src={icons.exchangeicon} className='w-12 m-auto mb-2' alt="" />
                <p>easy returns</p>
                <p>Hassle free exchange policies</p>
            </div>

            <div className='items-center '>
                <img src={icons.quality}className='w-12 m-auto mb-2'  alt="" />
                <p>quality products</p>
                <p>all our products are of best quality</p>
            </div>

            <div className='items-center '>
                <img src={icons.support}className='w-10 m-auto mb-3'  alt="" />
                <p>customer support</p>
                <p>24/7 support team available for you</p>
            </div>

        </div>
     );
}

export default OurPolicy;