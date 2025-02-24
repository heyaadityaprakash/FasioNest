import React from 'react';
import { imageAssets } from '../assets/assets';
function Hero() {
    return ( 
        <div className='flex flex-col sm:flex-row border rounded-md border-gray-500 '>
        <div className='w-full sm:w-6/12  flex flex-col items-center justify-center py-10 sm:px-2 gap-4'>
            <div className='flex items-center'>
                {/* <p className='w-8 md:w-10 h-[2px] bg-[#414141]'></p> */}
                <p>Shop our latest collection</p>
            </div>
            <h1 className='text-2xl pl-4 prata-regular  '>Curated for the Bold. Crafted for the Elegant</h1>
        </div>
        {/* Image */}
        <div className='w-full sm:w-6/12'> 
            <img src={imageAssets.cover2} className=' rounded-r-md 'alt="Best Sellers Image" />
        </div>
    
    </div>
    
     );
}

export default Hero;