import React, { useState } from 'react';
import { createContext } from "react";
import { products } from "../assets/assets";
export const ShopContext=createContext()

export const ShopContextProvider=(props)=>{
     const currency="₹"
     const del_fee=49
     const [search,setSearch]=useState('')
     // show / hide search bar
     const[showSearch,setShowSearch]=useState(true)


    const val={
        products,currency,del_fee,search,setSearch,showSearch,setShowSearch
    }

   
    return (
        <ShopContext.Provider value={val}>
            {props.children}
        </ShopContext.Provider>
    )
}
