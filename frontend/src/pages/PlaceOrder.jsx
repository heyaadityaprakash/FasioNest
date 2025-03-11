import React,{useState,useContext} from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal'
import { ShopContext } from '../context/ShopContext';
import { icons } from '../assets/assets';
function PlaceOrder() {

    const [method,setMethod]=useState('cod')
    const {navigate}=useContext(ShopContext)
    return ( 
        <div className='flex flex-col sm:flex-row justify-between gap-4 pt-4 min-h-[80vh]'>
            {/* left */}
            <div classname='flex '>
                <div className='text-xl'>
                    <Title text1={"Order"} text2={"Summary"}/>
                </div>

                <div className='flex gap-2 mt-4'>
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
                    <div className='flex gap-2'>
                        <div onClick={()=>setMethod('stripe')} className='flex gap-2 item-center  cursor-pointer px-2 py-2'>
                            <p  className={`min-w-3 h-3 border rounded-full ${method==='stripe'?'bg-green-400':''}`}></p>
                            <img src={icons.stripe} className='w-10' alt="" srcset="" />
                        </div>
                        <div onClick={()=>setMethod('razorpay')} className='flex gap-2 item-center cursor-pointer px-2 py-2'>
                            <p  className={`min-w-3 h-3 border rounded-full ${method==='razorpay'?'bg-green-400':''}`}></p>
                            <img src={icons.razorpay} className='w-16' alt="" srcset="" />
                        </div>
                        <div onClick={()=>setMethod('cod')} className='flex item-center gap-2 cursor-pointer px-2 py-2'>
                            <p className={`min-w-3 h-3 border rounded-full ${method==='cod'?'bg-green-400':''}`}></p>
                            <p className='text-sm font-bold '>COD</p>
                        </div>

                    </div>
                </div>


                <div className='mt-4'>
                    <button onClick={()=>navigate('/orders')} className='bg-black text-gray-100 px-10 py-2 w-full'>Place Order</button>
                </div>
            </div>
        </div>
     );
}

export default PlaceOrder;