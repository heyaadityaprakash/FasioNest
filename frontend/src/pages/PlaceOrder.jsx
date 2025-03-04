import React from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal'
function PlaceOrder() {
    return ( 
        <div className='flex flex-col sm:flex-row justify-between gap-4 pt-4 min-h-[80vh]'>
            {/* left */}
            <div classname='flex '>
                <div className='text-xl'>
                    <Title text1={"Order"} text2={"Summary"}/>
                </div>

                <div className='flex gap-2'>
                    <input className="border border-gray-400 rounded-sm py-2 px-4 w-full" type="text" placeholder="First Name" />
                    <input className="border border-gray-400 rounded-sm py-2 px-4 w-full" type="text" placeholder="last Name" />
                </div>

                <div className='flex gap-4 mt-2'>
                    <input className="border border-gray-400 rounded-sm py-2 px-4 w-full" type="text" placeholder="Email" />
                </div>
                <div className='flex gap-4 mt-2'>
                    <input className="border border-gray-400 rounded-sm py-2 px-4 w-full" type="Number" placeholder="Phone no" />
                </div>
                <div className='flex gap-4 mt-2'>
                    <input className="border border-gray-400 rounded-sm py-2 px-4 w-full" type="text" placeholder="Flat-no / House / Building" />
                </div>

                <div className='flex gap-2 mt-2 '>
                    <input className="border border-gray-400 rounded-sm py-2 px-4 w-full" type="text" placeholder=" City" />
                    <input className="border border-gray-400 rounded-sm py-2 px-4 w-full" type="text" placeholder="zip-code" />
                </div>
                
            </div>

            {/* right */}


            <div className='mt-10'>
                <div className='mt-8 min-w-80'>
                 <CartTotal/>
                </div>

                <div className='mt-10'>
                    <Title text1={"payment"} text2={"method"}/>
                    <div className=''>
                        <div className=''>
                            <p className=''>{}</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
     );
}

export default PlaceOrder;