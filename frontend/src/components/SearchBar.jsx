import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { icons } from '../assets/assets';
import { useLocation } from 'react-router-dom';
function SearchBar() {
    const {search,setSearch,showSearch,setShowSearch}=useContext(ShopContext)
    const [visible,setVisible]=useState(false)
    const location=useLocation()

    useEffect(()=>{
        // console.log(location.pathname);
        if(location.pathname.includes('collection')){
            setVisible(true)

        }else{
            setVisible(false)
        }
        
    },[location])
    return showSearch && visible? ( 
        <div className="text-center">
        <div className="inline-flex items-center justify-between border border-gray-300 mx-3 my-5 px-4 py-2 rounded-full w-3/4 sm:w-1/2">
            <input
                className="flex-1 text-sm py-2 px-4 rounded-full focus:outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search for latest trends"
            />
            <img
                src={icons.search}
                alt="search icon"
                className="w-4 mr-2 cursor-pointer"
            />
        </div>
                <img
                    onClick={() => setShowSearch(false)}
                    src={icons.cross}
                    className=" inline w-4 cursor-pointer"
                    alt="close icon"
                />
    </div>
    
     ):null
}

export default SearchBar;