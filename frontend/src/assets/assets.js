import binicon from './bin_icon.png'
import bluejacket from './blue-green-jacket.jpg'
import bluejacket2 from './blue-green-jacket-2.jpg'
import bluejacket3 from './blue-green-jacket-3.jpg'
import bluejacket4 from './blue-green-jacket-4.jpg'
import carticon from './cart_icon.png'
import cover1 from './cover-1.jpg'
import cover2 from './cover-2.jpg'
import cover3 from './cover-3.jpg'
import creampullover from './cream-pullover.jpg'
import creampullover2 from './cream-pullover-2.jpg'
import creampullover3 from './cream-pullover-3.jpg'
import crossicon from './cross_icon.png'
import dropdown from './dropdown_icon.png'
import jeans1 from './jeans-grey.jpg'
import jeans2 from './jeans-grey-2.jpg'
import hoodie from './latte-hoodie.jpg'
import leatherjacket from './leather-jacket.jpg'
import leatherjacket2 from './leather-jacket-2.jpg'

import main1 from './main-1.jpg'
import main2 from './main-2.jpg'
import tshirt from './navy-tshirt.jpg'
import overcoat from './overcoat-2.jpg'
import overcoat2 from './overcoat-1.jpg'
import overcoat3 from './overcoat-3.jpg'
import profile from './profile_icon.png'
import quality from './quality_icon.png'
import razorpay from './razorpay_logo.png'
import search from './search_icon.png'
import stardull from './star_dull_icon.png'
import star from './star_icon.png'
import stripe from './stripe_logo.png'
import support from './support_img.png'
import sweater from './ver-strips-1.jpg'
import mainlogo from './main logo.png'
import mainlogodark from './main logo dark.jpg'
import hamburger from './hamburger.png'
import halfsleeve from './ver-strips-2.jpg'
import halfsleeve2 from './ver-strips-1.jpg'

import exchangeicon from './exchange_icon.png'
export const products = [
  {
    _id: 'product1',
    name: 'Blue Green Jacket',
    image: [bluejacket,bluejacket2,bluejacket4],
    date: '2025-02-21',
    price:'1,999',
    size: ['S', 'M', 'L', 'XL'],
    description: 'A stylish blue-green jacket perfect for cold weather.',
  },
  {
    _id: 'product2',
    name: 'Cream Pullover',
    image: [creampullover,creampullover2,creampullover3],
    date: '2025-02-21',
    price:'1,399',
    size: ['M', 'L', 'XL'],
    description: 'Comfortable and warm cream-colored pullover.',
  },
  {
    _id: 'product3',
    name: 'Biege Overcoat',
    image:  [overcoat,overcoat2,overcoat3],
    date: '2025-02-21',
    price:'2,999',
    size: ['32', '34', '36'],
    description: 'Stylish and Classy Overcoat for Winter look.',
  },
  {
    _id: 'product4',
    name: 'Grey and Blue Knit Top',
    image: [halfsleeve],
    date: '2025-02-21',
    price:'1,999',
    size: ['S', 'M', 'L'],
    description: 'Stylish and Cute Pullover Half sleeve.',
  },
  {
    _id: 'product5',
    name: 'Leather Jacket',
    image: [leatherjacket,leatherjacket2,bluejacket3],
    date: '2025-02-21',
    price:'4,999',
    size: ['M', 'L', 'XL'],
    description: 'High-quality leather jacket for a classic look.',
  },
  {
    _id: 'product6',
    name: 'biege hoodie',
    image: [overcoat2],
    date: '2025-02-21',
    price:'1,999',
    size: ['M', 'L', 'XL'],
    description: 'Super-Comfy oversized Hoodie.',
  },
  {
    _id: 'product7',
    name: 'Baggy Jeans-Blue',
    image: [jeans1],
    date: '2025-02-21',
    price:'2,999',
    size: ['M', 'L', 'XL'],
    description: 'High-quality Baggy Blue jeans.',
  },{
    _id: 'product8',
    name: 'Baggy-Jeans-Grey',
    image: [jeans2],
    date: '2025-02-21',
    price:'2,999',
    size: ['M', 'L', 'XL'],
    description: 'High-quality Baggy Blue jeans',
  },
  
  // Add more products here...
];

export const logo ={
  logo:mainlogo,
  logodark:mainlogodark
}

export const icons = {
  bin: binicon,
  cart: carticon,
  cross: crossicon,
  dropdown: dropdown,
  profile: profile,
  quality: quality,
  razorpay: razorpay,
  search: search,
  starDull: stardull,
  star: star,
  stripe: stripe,
  support: support,
  hamburger:hamburger,
  exchangeicon:exchangeicon
};

export const imageAssets = {
  main1:main1,
  main2:main2,
  cover1:cover1,
  cover2:cover2,
  cover3:cover3,

};