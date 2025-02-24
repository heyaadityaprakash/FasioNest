import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
function BestSellers() {
    const {products} =useContext(ShopContext)
    const [bestSeller,setBestSeller]=useState([])

    useEffect(()=>{
        const bestProd=products.filter((item)=>item.bestSeller===true)
        setBestSeller(bestProd.slice(0.5))
    },[])
    return ( 
        <div className='my-10'>
            <div className='text-center text-2xl py-8'>
                <Title text1={"BEST"} text2={"SELLERS"}/>
                <p className='text-xs sm:text-sm m-auto text-gray-800'></p>
            </div> 

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5gap-6 gap-y-6'>
                {
                    bestSeller.map((item,index)=>{
                        return(
                            <div>
                                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                            </div>
                        )
                    })
                }

            </div>

        </div>
     );
}

export default BestSellers;