import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import { products } from "../assets/assets";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export const ShopContext=createContext()

export const ShopContextProvider=(props)=>{
     const currency="₹"
     const del_fee=49
     const [search,setSearch]=useState('')
     // show / hide search bar
     const[showSearch,setShowSearch]=useState(true)
    // to update the no of item in cart
    const [cartItem,setCartItem]=useState({})
    const navigate=useNavigate()
    const addToCart=async(itemId,size)=>{
        // create a copy of structure / object data type

        if(!size){
            toast.error("Please select a size")
            return;
        }
        let cartData=structuredClone(cartItem)

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size]+=1;
            }

            else{
                cartData[itemId][size]=1;
            }
        }
        else{
            cartData[itemId]={}
            cartData[itemId][size]=1;
        }

        setCartItem(cartData)

    }

    const getCartCount=()=>{
        let totalCount=0;
        for (const items in cartItem) {
           for(const item in cartItem[items]){
            try {
                if(cartItem[items][item]>0){
                    totalCount+=cartItem[items][item]

                }
            } catch (error) {
                
            }
           }
        }

        return totalCount
    }


    const updateQuantity=async(itemId,size,quantity)=>{
        // copy of items
        let cartData=structuredClone(cartItem)
        cartData[itemId][size]=quantity
        setCartItem(cartData)

    }

    const getCartAmount=()=>{
        let totalAmount=0;
        for(const items in cartItem){
            let itemInfo=products.find((prod)=>prod._id===items._id)
            console.log(itemInfo);
            
            for(const item in cartItem[items]){
                try {
                    if(cartItem[items][item]>0){
                        totalAmount+=Number(itemInfo.price)*cartItem[items][item]
                    }
                } catch (error) {
                    
                }
            }
        }
        console.log(totalAmount);
        
        return totalAmount
    }

    // useEffect(()=>{
    //     console.log(cartItem);
        
    // },[cartItem])

    const val={
        products,currency,del_fee,search,setSearch,showSearch,setShowSearch,cartItem,addToCart,getCartCount,updateQuantity,getCartAmount,navigate
    }

   
    return (
        <ShopContext.Provider value={val}>
            {props.children}
        </ShopContext.Provider>
    )
}
