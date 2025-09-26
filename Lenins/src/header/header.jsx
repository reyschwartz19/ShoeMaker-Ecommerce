


const Header = () => {
    return(
      <header className='flex  items-center py-4 gap-1  mt-1.5 w-full '>
        
            <div className='flex items-center bg-gray-200   gap-5 py-2 px-[10px] w-[290px] rounded-md'>
                <span className='material-icons text-3xl!'>search</span>
                <input placeholder='Search' className='outline-none text-2xl w-[200px] h-[30px] '/>
            </div>
            <span className='material-icons text-4xl! ml-auto'>notifications</span>
        
      </header>
    );
}

export default Header