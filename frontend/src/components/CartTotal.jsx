import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
function CartTotal() {
    const {currency,getCartAmount,del_fee}=useContext(ShopContext)
    return ( 
        <div className='w-full'>
            <div className=''>
                <Title text1={"Cart"} text2={"Total"}/>
            </div>

            <div className='flex flex-col mt-2 gap-2'>
                <div className='flex justify-between'>
                    <p>Sub-Total</p>
                    <p>{currency}{getCartAmount()}</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p>Shipping</p>
                    <p>{currency}{del_fee}</p>
                </div>
                <hr />
                <div className='flex justify-between font-medium'>
                    <p>Total</p>
                    <p>{currency}{getCartAmount()+del_fee}</p>
                </div>



            </div>

        </div>

     );
}

export default CartTotal;