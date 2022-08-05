import {useState} from 'react'
import { IProduct } from '../interfaces/product'
import {AiOutlineShoppingCart,AiOutlineZoomIn} from 'react-icons/ai'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {motion} from 'framer-motion'
 
interface ProductProps{ 
    product:IProduct   
    toggleProductModal():void
    setProduct(product:IProduct):void
}


const Product = ({product,toggleProductModal,setProduct}:ProductProps) => {

    const[highLighted,setHighLighted]=useState(false)

    const handleHighLighting=()=>{
        setHighLighted(prevState=>!prevState)
    } 




  return (
    <>
    <motion.div initial={{y:500}} animate={{y:0,opacity:1}} transition={{duration:1,opacity:0}} className='flex flex-col justify-center items-center w-full shadow-lg shadow-slate-200 '>
        <div className='py-2 flex justify-between items-center border-t-2 border-t-slate-100 w-full px-3'>
            <p className='text-xs'>{product.name}</p>
            <p className='text-xs font-semibold'>{new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(product.price)}</p>
        </div>
        <div className='relative w-full flex flex-col justify-center items-center' onMouseEnter={handleHighLighting} onMouseLeave={handleHighLighting}>
        <LazyLoadImage src={product.image} alt="" className='h-[200px]'  effect="blur" />
        <div className={`w-full h-full transition-colors duration-200 ease-linear bg-[#00000071] absolute top-0 left-0 flex justify-center items-center ${highLighted ? 'block':'hidden'} `}>
            <motion.span  whileHover={{
    scale: 1.5,
    rotate:[0,-30,30,-30,30,-30,30,0],
    transition: { duration: 0.5 },
  }}
  whileTap={{ scale: 1.2 }}><AiOutlineShoppingCart className='text-4xl text-white cursor-pointer'/></motion.span>
            <motion.span  whileHover={{
    scale: 1.5,
    transition: { duration: 0.5 },
  }}
  whileTap={{ scale: 1.2 }}><AiOutlineZoomIn className='text-4xl ml-10 text-white cursor-pointer' onClick={()=>{
                toggleProductModal()
                setProduct(product)
            } }/></motion.span>
        </div>
        </div>
    </motion.div>
    </>
  )
}

export default Product