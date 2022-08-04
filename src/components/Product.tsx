import {useState} from 'react'
import { IProduct } from '../interfaces/product'
import {AiOutlineShoppingCart,AiOutlineZoomIn} from 'react-icons/ai'


const Product = ({name,price,image}:IProduct) => {

    const[highLighted,setHighLighted]=useState(false)

    const handleHighLighting=()=>{
        setHighLighted(prevState=>!prevState)
    } 




  return (
    <>
    <div className='flex flex-col justify-center items-center w-full shadow-lg shadow-slate-200 '>
        <div className='py-2 flex justify-between items-center border-t-2 border-t-slate-100 w-full px-3'>
            <p className='text-xs'>{name}</p>
            <p className='text-xs font-semibold'>{new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(price)}</p>
        </div>
        <div className='relative w-full flex flex-col justify-center items-center' onMouseEnter={handleHighLighting} onMouseLeave={handleHighLighting}>
        <img src={image} alt="" className='h-[150px]'  />
        <div className={`w-full h-full transition-colors duration-200 ease-linear bg-[#00000071] absolute top-0 left-0 flex justify-center items-center ${highLighted ? 'block':'hidden'} `}>
            <AiOutlineShoppingCart className='text-3xl text-white cursor-pointer'/>
            <AiOutlineZoomIn className='text-3xl ml-4 text-white cursor-pointer'/>
        </div>
        </div>
    </div>
    </>
  )
}

export default Product