import {Heart,Plus} from 'lucide-react'



const ProductCard = ({image}) => {


    

    return(
        <div className="rounded-lg w-[180px] h-[275px] bg-white shadow-lg">
            <div className={` w-full h-[150px] bg-cover bg-center rounded-t-lg p-3`} style={{backgroundImage: `url(${image})`}}>
               <Heart className='w-8 h-9 rounded-full bg-gray-300 p-1.5' />
            </div>
            <div className="w-full p-[15px]">
                <p className="text-[1.1rem] font-bold mb-1" >Product Name</p>
                <p className="font-bold w-full">$50.00 
                <span className="ml-2 line-through font-normal text-[0.8rem] text-gray-500">$65.00</span></p>
              <div className='mt-1.5 flex justify-between items-center'>

                <div className='flex'>
                    <label className=' cursor-pointer'><input type='radio' name='color' value='brown1' className='hidden peer' defaultChecked/>
                       <div className='flex h-6 w-6 rounded-full items-center justify-center border-0  peer-checked:border-[2px] peer-checked:border-black'>
                        <div className='h-3.5 w-3.5 bg-[linear-gradient(145deg,#3B1C0A_0%,#5A2E14_30%,#3B1C0A_60%,#A0522D_80%,#E6C7A1_95%)] rounded-full'></div>
                       </div>
                    </label>
                    <label className=' cursor-pointer'><input type='radio' name='color' value='brown2' className='hidden peer' />
                       <div className='flex h-6 w-6 rounded-full items-center justify-center border-0 peer-checked:border-[2px] peer-checked:border-black'>
                        <div className='h-3.5 w-3.5 bg-[linear-gradient(145deg,#0A0A0A_0%,#2C2C2C_30%,#0A0A0A_60%,#B3B3B3_80%,#FFFFFF_95%)] rounded-full'></div>
                       </div>
                    </label>
                   
                </div>

                <Plus  className='w-7 h-7 text-gray-600 shadow-sm'/>
            
              </div>
            </div>
        </div>
    );

    

}

export default ProductCard;