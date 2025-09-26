import arrow from '../assets/right-arrow.png'


const Offers = () => {
   
   return(
    <section className=" flex justify-between w-full border-1 border-gray-300 h-[140px] items-center p-5 my-2.5">
    
        <div>
          <p className="font-bold text-[1.1rem] mb-0.5">50% OFF</p>
          <p >On all orders above $50</p>
         
          <div className="flex gap-3 mt-2">
            <div className="h-1 bg-black w-8"/>
             <div className="h-1 bg-gray-200 w-8"/>
              <div className="h-1 bg-gray-200 w-8"/>
          </div>
          
        </div>
        
        <div>
          <img src={arrow} className='bg-black rounded-full w-13 p-3'/>
        </div>
      
    </section>

   );

}

export default Offers;