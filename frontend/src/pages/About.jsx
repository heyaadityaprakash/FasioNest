import React from "react";
import Title from "../components/Title";
import { imageAssets } from "../assets/assets";

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-2xl text-center mb-8">
        <Title text1={"about"} text2={"us"} />
      </div>

      <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
        <div className="w-full md:w-2/5 lg:w-1/3">
          <img
            className="w-full h-auto object-cover rounded shadow-md"
            src={imageAssets.cover2}
            alt="FashioNest fashion"
          />
        </div>

        <div className="flex flex-col justify-center gap-4 w-full md:w-3/5 lg:w-2/3 mt-6 md:mt-0">
          <p className="text-gray-700 leading-relaxed">
            At FashioNest, we believe that fashion is more than just
            clothing—it's a form of self-expression that empowers individuals to
            showcase their unique personality. Our vision is to create elegant,
            trendy pieces that seamlessly blend timeless sophistication with
            contemporary style.
          </p>

          <p className="text-gray-700 leading-relaxed">
            We are committed to crafting high-quality garments that not only
            follow the latest fashion movements but also stand the test of time.
            Through thoughtful design and meticulous attention to detail, we
            strive to deliver clothing that makes you feel confident and
            authentic.
          </p>

          <p className="text-gray-700 leading-relaxed font-medium">
            Join us in our journey to redefine modern elegance—where trend meets
            tradition, and style meets substance.
          </p>
        </div>
      </div>

      <div className="text-xl text-center py-10">
        <Title text1={"why"} text2={"us"} />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <div className="border rounded-md px-4 py-6 flex flex-col gap-3 text-center shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-lg">Timeless Style</h3>
          <p className="text-gray-600 text-sm">Our design team creates pieces that transcend seasonal trends, ensuring your wardrobe remains elegant year after year.</p>
        </div>
        
        <div className="border rounded-md px-4 py-6 flex flex-col gap-3 text-center shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-lg">Premium Materials</h3>
          <p className="text-gray-600 text-sm">We source only the finest fabrics and materials, carefully selected for comfort, durability, and luxurious feel.</p>
        </div>
        
        <div className="border rounded-md px-4 py-6 flex flex-col gap-3 text-center shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-lg">Sustainable Fashion</h3>
          <p className="text-gray-600 text-sm">Our eco-conscious production methods minimize environmental impact while maximizing style and quality.</p>
        </div>
      </div>
    </div>
  );
}

export default About;