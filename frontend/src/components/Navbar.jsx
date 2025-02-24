import React, { useContext, useState } from "react";
import { icons, logo } from "../assets/assets.js";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext.jsx";
function Navbar() {
  const {setShowSearch}=useContext(ShopContext)
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex item-center justify-between py-6 font-md">
      <Link to={'/'}> <img src={logo.logo} className="w-34" alt="" /></Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-600">
        <NavLink to={"/"} className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 h-[1.5px] rounded-sm border-none bg-gray-800 hidden" />
        </NavLink>

        <NavLink
          to={"/collection"}
          className="flex flex-col items-center gap-1"
        >
          <p>COLLECTIONS</p>
          <hr className="w-2/4 h-[1.5px] rounded-sm border-none bg-gray-800 hidden" />
        </NavLink>

        <NavLink to={"/about"} className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 h-[1.5px] rounded-sm border-none bg-gray-800 hidden" />
        </NavLink>

        <NavLink to={"/contact"} className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 h-[1.5px] rounded-sm border-none bg-gray-800 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6 ">
        <img onClick={()=>setShowSearch(true)} src={icons.search} className="w-5 cursor-pointer" alt="" />
        <div className="group relative">
          <img src={icons.profile} className="w-5 cursor-pointer" alt="" />
          {/* menu */}
          <div className="group-hover:block hidden absolute right-0 pt-4 bg-gray-200 rounded-md">
            <div className="flex flex-col gap-2 w-32 text-center text-gray-700 py-2 px-2  ">
              <p className="cursor-pointer hover:text-black">Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img src={icons.cart} className="w-5" alt="" />
          <p className="bg-neutral-900 text-center text-gray-100 rounded-full aspect-square text-xs absolute bottom-[-5px] right-[-5px] w-4">
            4
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={icons.hamburger}
          className="w-8 cursor-pointer sm:hidden "
          alt=""
        />
      </div>
      {/* /sidebar for mobile devices */}

      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-gray-100 transition-transform duration-300 ease-in-out ${visible ? 'w-full transform translate-x-0' : 'w-0 transform translate-x-full'}`}>
    <div className='flex flex-col text-gray-700 text-center justify-center items-center h-full'>
        <div onClick={() => { setVisible(false) }} className='flex items-center gap-4 p-2 absolute top-4 left-4'>
            <img src={icons.dropdown} className='h-6 my-4 mx-4' alt="" />
        </div>
        <NavLink onClick={() => setVisible(false)} className={'py-2 pl-6 hover:scale-110 w-full text-center'} to={'/'}>
            Home
        </NavLink>
        <hr className='w-4/5 mx-auto' />
        <NavLink onClick={() => setVisible(false)} className={'py-2 pl-6 hover:scale-110 w-full text-center'} to={'/collection'}>
            Collection
        </NavLink>
        <hr className='w-4/5 mx-auto' />
        <NavLink onClick={() => setVisible(false)} className={'py-2 pl-6 hover:scale-110: w-full text-center'} to={'/about'}>
            About
        </NavLink>
        <hr className='w-4/5 mx-auto' />
        <NavLink onClick={() => setVisible(false)} className={'py-2 pl-6 hover:scale-110 w-full text-center'} to={'/orders'}>
            Contact us
        </NavLink>
        <hr className='w-4/5 mx-auto' />
    </div>
</div>

    </div>
  );
}

export default Navbar;
