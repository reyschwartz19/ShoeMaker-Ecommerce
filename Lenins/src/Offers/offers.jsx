import arrow from '../assets/right-arrow.png'
import { useState, useEffect } from 'react';


const Offers = () => {
   
 const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
 const offers =  [
    {
      discount: "50% OFF",
      description: "On all orders above $50",
    },
    {
      discount: "FREE SHIPPING",
      description: "On orders over $75",
    },
    {
      discount: "BUY 1 GET 1",
      description: "On selected items",
    } ];

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % offers.length)
      },5000 );

      return () => clearInterval(interval);
    }, [offers.length] )

    const currentOffer = offers[currentOfferIndex];

   return(
    <section className=" flex justify-between w-full border-1 border-gray-300 h-[140px] items-center p-5 my-2.5">
    
        <div>
          <p className="font-bold text-[1.1rem] mb-0.5">{currentOffer.discount}</p>
          <p >{currentOffer.description}</p>
         
          <div className="flex gap-3 mt-2">
            <div className={`h-1 ${currentOfferIndex === 0 ? 'bg-black' : 'bg-gray-200'} w-8`} onClick={()=>setCurrentOfferIndex(0)}/>
             <div className={`h-1 ${currentOfferIndex === 1 ? 'bg-black' : 'bg-gray-200'} w-8`} onClick={()=>setCurrentOfferIndex(1)}/>
              <div className={`h-1 ${currentOfferIndex === 2 ? 'bg-black' : 'bg-gray-200'} w-8`} onClick={()=>setCurrentOfferIndex(2)}/>
          </div>
          
        </div>
        
        <div>
          <img src={arrow} className='bg-black rounded-full w-13 p-3'/>
        </div>
      
    </section>

   );

}

export default Offers;