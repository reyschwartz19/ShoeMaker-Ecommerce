import background from '../assets/Teal-bg.jpg'
import feet from '../assets/Hero-Shoe.png'


const Hero = () => {
   
   return(
     <section className='relative h-[90vh]' style={{ backgroundImage: `url(${background})` }}>
       <img className='absolute bottom-0 right-0 left-80 h-140 border-2 border-red-50' src={feet}/>
     </section>

   );

}

export default Hero;