import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
function Latest() {

    const [latestProducts,setLatestProducts]=useState([])

    useEffect(()=>{
        setLatestProducts(products.slice(0,10))

    },[])
    // getting data from api
    const {products}=useContext(ShopContext)
    // console.log(products);

    return ( 
        <div className='my-10'>
            <div className='text-center py-8 text-2xl'>
                <Title text1={"LATEST"} text2={"COLELLECTION"} />
                <p className='text-xs sm:text-sm m-auto text-gray-800'>check out the latest fashion curated for the trend.</p>
            </div>

            {/* listing top products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-6'>
                {
                    latestProducts.map((item,index)=>{
                        return(
                            <div className=''>
                                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                            </div>
                        )
                       
                    })
                }

            </div>

        </div>
        
        
     );
}

export default Latest;