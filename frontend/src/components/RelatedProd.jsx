import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
function RelatedProd({category,subCateogry}) {
    const {products}=useContext(ShopContext)

    const [related,setRelated]=useState([])

    // to show the related products
    useEffect(()=>{
        if(products.length>0){
            let productCopy=products.slice()
            productCopy=productCopy.filter((item)=>category===item.category)

            productCopy=productCopy.filter((item)=>subCateogry===item.subCateogry)

            setRelated(productCopy.slice(0,5))
            
        }
    },[products])
    return ( 
        <div className='my-20'>
            <div className='text-center text-xl'>
            <Title text1={"RELATED"} text2={"PRODUCTS"}/>
            </div>


            <div className='grid grid-cols-2 sm:grid-cols-3 mdL:grid-cols-4 lg:grid-cols-5 gap-4'>
                {
                    related.map((item,index)=>(
                        <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>

                    ))
                }

            </div>


        </div>
     );
}

export default RelatedProd;