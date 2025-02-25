import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { icons } from '../assets/assets';

function Product() {
    const {productId} = useParams();
    const {products, currency} = useContext(ShopContext);
    const [productDetails, setProductDetails] = useState(false);
    const [image, setImage] = useState('');
    const [size, setSize] = useState('');

    const fetchProduct = async () => {
        products.map((item) => {
            if (item._id === productId) {
                setProductDetails(item);
                setImage(item.image[0]);
                return null;
            }
        });
    };

    useEffect(() => {
        fetchProduct();
    }, [productId, products]);

    return productDetails ? (
        <div className="border-t pt-10 transition-opacity ease-in duration-300 opacity-100">
            <div className="flex gap-4 sm:gap-10 flex-col sm:flex-row">
                {/* Image section */}
                <div className="flex-1 flex flex-col sm:flex-row gap-2 sm:gap-4">
                    {/* Image Carousel */}
                    <div className="flex sm:flex-col w-full sm:w-[20%] overflow-x-auto sm:overflow-y-auto gap-2 sm:gap-4">
                        {productDetails.image.map((item, index) => (
                            <img
                                onClick={() => setImage(item)}
                                key={index}
                                src={item}
                                className="w-[80px] sm:w-[90px] rounded-sm cursor-pointer"
                                alt={`Product image ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Main Image */}
                    <div className="w-full sm:w-[60%]">
                        <img className="w-full h-auto rounded-sm" src={image} alt="Main product" />
                    </div>
                </div>

                {/* Product Info */}
                <div className="flex-1">
                    <h1 className="font-medium text-xl">{productDetails.name}</h1>

                    <div className="flex items-center gap-1 mt-2">
                        <img className="w-4" src={icons.star} alt="star" />
                        <img className="w-4" src={icons.star} alt="star" />
                        <img className="w-4" src={icons.star} alt="star" />
                        <img className="w-4" src={icons.star} alt="star" />
                        <img className="w-4" src={icons.starDull} alt="star" />
                        <p>(1.2K)</p>
                    </div>

                    <p className="mt-2 font-medium">
                        {currency} {productDetails.price}
                    </p>

                    <p className="mt-5 text-gray-600">{productDetails.description}</p>

                    <div className="flex flex-col gap-4 my-8">
                        <p>Select size:</p>
                        <div className="flex gap-2">
                            {productDetails.size.map((item, index) => (
                                <button
                                    onClick={() => setSize(item)}
                                    className={`border py-2 px-4 ${item === size ? 'bg-gray-800 text-gray-200' : ''}`}
                                    key={index}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button className="bg-gray-800 text-gray-100 px-4 py-2 rounded-sm active:bg-gray-600">
                        Add to Bag
                    </button>

                    <hr className="mt-8 sm:w-4/5" />

                    <div className='text-sm text-gray-600 flex flex-col gap-1'>
                        <p>100% original product</p>
                        <p>Cash on Delivery Available</p>
                        <p>Return and Exchange within 10 days</p>
                    </div>
                </div>
            </div>

            {/* reviews */}
            <div className='mt-10'>
                <div className='flex'>
                    <p className='border-b px-4 py-2 '>description</p>
                    <p className='border-b px-4 py-2 '>reviews</p>
                </div>

                <div className='flex flex-col gap-2 text-sm py-2 px-4 text-gray-600'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere officiis harum voluptas asperiores non eos, modi ab nam. Dignissimos hic pariatur animi eaque dolore sed, nihil ad provident natus obcaecati.
                    </p>

                    <p>
                    Beatae aperiam optio eius dolorum saepe quos atque quaerat odit similique ad facilis asperiores voluptate laudantium</p>
                </div>

            </div>

            {/* related prods */}

            
        </div>
    ) : (
        <div>Loading...</div>
    );
}

export default Product;