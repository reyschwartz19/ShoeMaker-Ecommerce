import { MoveRight } from "lucide-react";
import arrow from '../assets/right-arrow.png'

const CategoryCard = ({categoryImg}) => {

  return(
    <div className={`flex w-full h-[300px] bg-cover bg-center rounded-lg p-3`} style={{backgroundImage: `url(${categoryImg})`}}>
        <p className="text-[1.1rem] font-bold ">Product Name</p>
         <img src={arrow} className='bg-black rounded-full w-11 p-3 self-end-safe'/>
    </div>
  );

}

export default CategoryCard;