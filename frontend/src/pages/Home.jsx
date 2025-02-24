import React from 'react';
import Hero from '../components/Hero';
import Latest from '../components/Latest';
import BestSellers from '../assets/BestSellers';
import OurPolicy from '../components/OurPolicy';
import NewsLetter from '../components/NewsLetter';
function Home() {
    return ( 
        <div>
            <Hero/>
            <Latest/>
            <BestSellers/>
            <OurPolicy/>
            <NewsLetter/>
        </div>
     );
}

export default Home;