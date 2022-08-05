import React,{useRef} from 'react'
import { IProduct } from '../../interfaces/product'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {AiOutlineClose} from 'react-icons/ai'
import {motion} from 'framer-motion'


interface IProductModal{
    showProductModal:boolean  
    close():void
    product:IProduct
}

const ProductDetails = ({showProductModal,close,product}:IProductModal) => {

    const modalRef=useRef<HTMLDivElement>(null)
    const overlayRef=useRef<HTMLDivElement>(null)

    const handleClick=(event:React.MouseEvent<HTMLDivElement,MouseEvent>):void=>{
        if( event.target===overlayRef.current){
            close()
        }
    }

  return (
    <div className={`w-full h-full bg-[#000000b0] fixed left-0 top-0 z-[20] flex justify-center items-start ${showProductModal ? 'flex':'hidden'} `} ref={overlayRef} onClick={handleClick}>
        <motion.div animate={{scale:showProductModal ? 1:0}} initial={{scale:0}} transition={{duration:0.8}} className='w-[96%] md:w-[70%] min-h-[70vh] bg-white mt-[90px] relative z-[90]' ref={modalRef} >
            <div className='w-full py-1 flex justify-between items-center px-10'>
                <h4 className='text-xl font-semibold text-center'>{product.name}</h4>
                <motion.p  whileHover={{  
    scale:[1,1.5,0.5,1.5,0.5,1.5,0.5,1],    
    transition: { duration: 1.5 },
  }}
  whileTap={{ scale: 1.2 }} className='text-xs font-semibold'>{new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(product.price)}</motion.p>
            </div>
           <div className='w-full grid grid-cols-1 md:grid-cols-4 place-items-center'>
                <div className='col-span-1 bg-slate-100 h-full w-full px-3 hidden md:flex justify-center items-start flex-col'>
                    <p className='text-xs mt-4'>Category: {product.category}</p>
                    <p className='line-through xs mt-4'>Discount {product.discout}</p>
                    <p className='text-xs mt-4'>Rating {product.rating}</p>
                </div>
                <div className='w-full py-1 flex justify-center items-center col-span-2'>
                < LazyLoadImage effect='blur' src={product.image} alt="" className='min-h-[60vh] pb-10 object-cover' />
            </div>
                <div className='col-span-1 bg-slate-100 h-full w-full px-3 hidden md:flex justify-center items-start flex-col'>
                    <h6 className='uppercase text-md font-semibold'>description</h6>
                    <p className='text-xs'>{product.description}</p>
                </div>
           </div>
            <div className='absolute w-full py-2 bg-slate-500 bottom-0 left-0 flex justify-center items-center'>
                <motion.span onClick={close} whileHover={{
    scale: 1.5,
    rotate:360,
    transition: { duration: 0.5 },
  }}
  whileTap={{ scale: 1.2 }}><AiOutlineClose className='text-3xl text-white'/></motion.span>
            </div>
        </motion.div> 
    </div>
  )
}

export default ProductDetails