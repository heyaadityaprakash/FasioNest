import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
function ProductItem({id,image,name,price}) {
    const {currency}=useContext(ShopContext)
    return ( 
        <Link className='cursor-pointer' to={`/product/${id}`}>
            <div className='overflow-hidden'>
                <img className='hover:scale-105 transition ease-in-out rounded-sm' src={image} alt="" />
            </div>
            <p className=' pt-2 mx-2 pb-1'>{name}</p>
            <p className=' font-medium mx-2 pb-2'>{currency}<span className='ml-1'></span>{price}</p>

        </Link>
     );
}

export default ProductItem;