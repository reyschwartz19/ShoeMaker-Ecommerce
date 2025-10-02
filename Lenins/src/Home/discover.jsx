
import ProductCard from './productCard';
import loafer from '../assets/loafer4.jpg'
import boot from '../assets/boot1.jpg'
import oxford from '../assets/oxford1.jpg'
import oxford2 from '../assets/oxford2.jpg'
import loafer2 from '../assets/laofer3.jpg'
import boot2 from '../assets/boot2.jpg'

const Discover = () => {
    
    
    return(
       <section >
        <div className='flex justify-between items-center'>
            <h2 className={`text-2xl font-bold my-4 font-playfair`}>Discover</h2>
            <a href="#" className='underline text-gray-900'>More</a>
        </div>
     
        <div className='flex overflow-x-auto gap-4'>
           
            <div className='flex-none '> <ProductCard image={loafer} image2={loafer2} color='loafer' /> </div>
            <div className='flex-none '> <ProductCard image={boot} image2={boot2} color='boot'/> </div>
           <div className='flex-none'> <ProductCard image={oxford2} image2={oxford} color='oxford2' /> </div>
            
                
           
          
        </div>   
        
       </section> 
    );

}

export default Discover;