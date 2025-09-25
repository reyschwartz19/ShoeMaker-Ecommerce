import styles from './header.module.css'


const Header = () => {
    return(
        <header className='flex justify-between  px-10 py-3.5 items-center shadow-sm bg-[#E5E5E5]'>
            <span className={`${styles.brand} text-2xl font-bold text-gray-900 `}>Lenins</span>
            <div className='flex items-center border-1 rounded-[20px] px-3.5 py-1.5 gap-2 '>
                <span className="material-icons cursor-pointer">search</span>
                <input type="text" placeholder='Search' className='outline-none w-[300px] focus:w-[350px] transition-all ease-in duration-300' />
            </div>
            <nav className='flex gap-7 mr-7'>
              <div>
                <span className="material-icons text-3xl! cursor-pointer">shopping_bag</span>
                <span></span>
              </div>  
               <span className='material-icons text-3xl! cursor-pointer'>account_circle</span>
            </nav>
        </header>
    )
}

export default Header