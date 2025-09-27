import styles from './discover.module.css'
import ProductCard from '../productCard/productCard';
import loafer from '../assets/loafer1.jpg'
import boot from '../assets/boot1.jpg'
import oxford from '../assets/oxford1.jpg'
import oxford2 from '../assets/oxford2.jpg'

const Discover = () => {
    
    
    return(
       <section>
        <div className='flex justify-between items-center'>
            <h2 className={`text-2xl font-bold my-4 ${styles.heading}`}>Discover</h2>
            <a href="#" className='underline text-gray-900'>More</a>
        </div>
     
        <div>
           <ProductCard image={loafer} /> 
        </div>   
        
       </section> 
    );

}

export default Discover;