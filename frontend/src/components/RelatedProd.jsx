import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
function RelatedProd({category,subCateogry}) {
    const {products}=useContext(ShopContext)

    const [related,setRelated]=useState([])

    useEffect(()=>{
        if(products.length>0){
            
        }
    },[products])
    return ( 
        <div>

        </div>
     );
}

export default RelatedProd;