



const ProductCard = ({image}) => {


    return(
        <div>
            <div className={` w-[200px] h-[200px] bg-cover`}  style={{backgroundImage: `url(${image})`}}>
            
            </div>
            <div>
                <p>Product Name</p>
                <p>$50.00 <span>$65.00</span></p>
            </div>
        </div>
    );

}

export default ProductCard;