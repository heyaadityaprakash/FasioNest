import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { icons } from "../assets/assets";
import CartTotal from "../components/CartTotal";
function Cart() {
  const { products, currency, cartItem, updateQuantity,navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item],
          });
        }
      }
    }
    // console.log(tempData);
    setCartData(tempData);
  }, [cartItem]);

  return (
    <div className="border-t pt-10">
      <div className="text-xl mb-2 text-center">
        <Title text1={"Your"} text2={"Bag"} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find((prod) => prod._id === item._id);
          return (
            <div
              key={index}
              className="py-2 border-b border-t text-gray-800 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-2 mt-2 "
            >
              <div className="flex gap-4 ">
                <img
                  src={productData.image[0]}
                  alt=""
                  className="w-16 sm:w-20"
                />
                <div>
                  <p>{productData.name}</p>
                  <div className="flex gap-6 mt-4">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p>{item.size}</p>
                  </div>
                </div>
              </div>

              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === 0
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
                className="px-2 py-1 border bg-gray-100 max-w-10 sm:max-w-20 text-center text-sm"
                type="number"
                min={1}
                defaultValue={item.quantity}
              />

              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                src={icons.bin}
                className="w-4 mt-2 cursor-pointer"
                alt=""
              />
            </div>
          );
        })}
      </div>

      <div className="flex justify-end my-10">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
        <div className="w-full text-end mt-4">
          <button onClick={()=>navigate('/placeorder')} className="bg-gradient-to-b bg-gray-800 text-gray-200 py-2 px-4">
            Checkout
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
