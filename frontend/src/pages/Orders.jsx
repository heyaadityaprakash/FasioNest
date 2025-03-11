import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

function Orders() {
  const { products, currency } = useContext(ShopContext);
  
  // Helper function to format the date
  const formatDate = () => {
    const date = new Date();
    return date.toLocaleDateString();
  };

  return (
    <div className="border-t pt-10">
      <div>
        <Title text1={"Order"} text2={"Summary"} />
      </div>
      <div>
        {products.slice(1, 4).map((item, index) => (
          <div key={index} className="py-4 border-b flex flex-col md:flex-row md:justify-between md:items-start">
            {/* Left side with image and product details */}
            <div className="flex items-start gap-2">
              <img className="w-16 md:w-20" src={item.image[0]} alt="" />
              
              {/* Product details */}
              <div>
                <p className="font-medium">{item.name}</p>
                <div className="flex items-center gap-3 text-sm mt-1">
                  <p>{currency}{item.price}</p>
                  <p>Q: 1</p> 
                  <p>Size: M</p> 
                </div>
              </div>
            </div>
            
            {/* Status and date - stacked on mobile, horizontal on larger screens */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 mt-2 md:mt-0">
              {/* Status */}
              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-full w-2 h-2"></div>
                <p className="text-sm">Ready to Ship</p>
              </div>
              
              {/* Date */}
              <div className="text-sm md:ml-4">
                <p>Date: <span className="text-gray-500">{formatDate()}</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;