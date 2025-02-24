import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { icons } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

function Collection() {
    const { products,search,showSearch } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState('relevance');

    const handleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value));
        } else {
            setCategory(prev => [...prev, e.target.value]);
        }
    };

    const handleSubCategory = (e) => {
        if (subCategory.includes(e.target.value)) {
            setSubCategory(prev => prev.filter(item => item !== e.target.value));
        } else {
            setSubCategory(prev => [...prev, e.target.value]);
        }
    };

    const catfilter = () => {
        let prodCopy = products.slice();

        // showing the products based on search
        if(showSearch && search){
            prodCopy=prodCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
        }
        
        if (category.length > 0) {
            prodCopy = prodCopy.filter(item => category.includes(item.category));
        }

        if (subCategory.length > 0) {
            prodCopy = prodCopy.filter(item => subCategory.includes(item.subCategory));
        }

        setFilterProducts(prodCopy);
    };

    // sorting function
    const sortProducts = () => {
        let filterprodcopy = filterProducts.slice();

        switch (sortType) {
            case 'relevance':
                filterprodcopy = filterprodcopy.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case 'price:low to high':
                filterprodcopy = filterprodcopy.sort((a, b) => parseFloat(a.price.replace(/[^0-9.-]+/g, '')) - parseFloat(b.price.replace(/[^0-9.-]+/g, '')));
                break;
            case 'price: high to low':
                filterprodcopy = filterprodcopy.sort((a, b) => parseFloat(b.price.replace(/[^0-9.-]+/g, '')) - parseFloat(a.price.replace(/[^0-9.-]+/g, '')));
                break;
            default:
                break;
        }

        setFilterProducts(filterprodcopy);
    };

    useEffect(() => {
        sortProducts();
    }, [sortType, filterProducts]); // Trigger sorting whenever sortType or filterProducts change

    useEffect(() => {
        catfilter();
    }, [category, subCategory,search,showSearch]); // Trigger filtering when category or subCategory changes

    return (
        <div className="flex flex-col sm:flex-row border-t gap-4">
            {/* Filters */}
            <div className="min-w-60">
                <p onClick={() => setShowFilter(!showFilter)} className="my-4 text-lg flex items-center cursor-pointer gap-2">
                    Filters
                </p>

                <img src={icons.dropdown} alt="" className={`sm:hidden ${showFilter ? 'rotate-90' : ''} h-4`} />

                <div className={`border border-gray-600 pl-5 py-2 mt-4 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className="mb-2 text-sm font-medium">Categories</p>
                    <div className="flex flex-col gap-2 text-sm text-gray-800 font-light">
                        <p className="flex gap-2">
                            <input onChange={handleCategory} className="w-4" type="checkbox" value={'men'} />Men
                        </p>
                        <p className="flex gap-2">
                            <input onChange={handleCategory} className="w-4" type="checkbox" value={'women'} />Women
                        </p>
                    </div>
                </div>

                <div className={`border border-gray-600 pl-5 py-2 mt-8 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className="mb-2 text-sm font-medium">Sub Categories</p>
                    <div className="flex flex-col gap-2 text-sm text-gray-800 font-light">
                        <p className="flex gap-2">
                            <input onChange={handleSubCategory} className="w-4" type="checkbox" value={'top'} />Top
                        </p>
                        <p className="flex gap-2">
                            <input onChange={handleSubCategory} className="w-4" type="checkbox" value={'bottoms'} />Bottoms
                        </p>
                    </div>
                </div>
            </div>

            {/* Items List */}
            <div className="flex-1">
                <div className="flex justify-between text-base sm:text-xl mb-2 my-4">
                    <Title text1={'ALL'} text2={'PRODUCTS'} />

                    <div className="border-gray-400 text-sm">
                        <select onChange={(e) => setSortType(e.target.value)} className="border">
                            <option value="relevance">relevance</option>
                            <option value="price:low to high">price: low to high</option>
                            <option value="price: high to low">price: high to low</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filterProducts.map((item, index) => (
                        <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Collection;
