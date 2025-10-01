import CategoryCard from "./categoryCard";
import loafer from '../assets/loafer4.jpg'
import boot from '../assets/boot1.jpg'
import oxford from '../assets/oxford1.jpg'
import oxford2 from '../assets/oxford2.jpg'
import loafer2 from '../assets/laofer3.jpg'
import boot2 from '../assets/boot2.jpg'

const Categories = () => {
  return(
    <section>
        <div className="flex justify-between items-center">
            <p className="font-playfair text-2xl font-bold my-4">Categories</p>
            <a href="#" className='underline text-gray-900'>More</a>
        </div>
        <div className="flex">
            <div>
              <CategoryCard />
            </div>
            <div>
              <CategoryCard />
            </div>
        </div>
    </section>
  );
}

export default Categories;