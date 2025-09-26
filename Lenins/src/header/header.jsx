import hamburger from '../assets/hamburger.png'
import bag from '../assets/parcel.png'
import search from '../assets/search.png'
import styles from './header.module.css'


const Header = () => {
    return(
      <header className='flex justify-between  items-center py-4 gap-1  mt-1.5 w-full '>

        <img src={hamburger} className='w-8' />
        <p className={`${styles.brand} text-2xl font-bold`}>Lenins</p>
        <div className='flex gap-4'>
            <img src={search} className='w-8' />
            <img src={bag} className='w-8' />
        </div>

       
        
      </header>
    );
}

export default Header