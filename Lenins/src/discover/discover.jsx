import styles from './discover.module.css'

const Discover = () => {
    
    
    return(
       <section>
        <div className='flex justify-between items-center'>
            <h2 className={`text-2xl font-bold my-4 ${styles.heading}`}>Discover</h2>
            <a href="#" className='underline text-gray-900'>More</a>
        </div>
        
       </section> 
    );

}

export default Discover;