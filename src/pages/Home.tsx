import {useState,useEffect,FC} from 'react'
import { IProduct } from '../interfaces/product'
import { items } from '../data/items'
import Product from '../components/Product'
import ReactPaginate from 'react-paginate'

interface Iitems{
  products:IProduct[] 
}

const Home:FC<Iitems>= ({products}) => { 

   const [currentItems, setCurrentItems] = useState<IProduct[]>([]);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage=8
  useEffect(() => {
  
   
    const endOffset = itemOffset + itemsPerPage;   
    setCurrentItems(products.slice(itemOffset, endOffset)); 
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage,products]);

 
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;   
    setItemOffset(newOffset);
  };




  return (
    <div className='min-h-[100vh] w-full flex flex-col justify-start items-center  px-3 md:px-10'>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-10 place-items-end   gap-y-10'>
        {currentItems?.map(product=>(
        <Product key={product.id} {...product} />
        ))}
      </div>


      <div className='mt-8'>
      <ReactPaginate
          breakLabel="..."
          nextLabel="next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="prev"        
          containerClassName="flex justify-center items-center w-full px-3 py-8 gap-2 md:gap-5"
          pageClassName=' text-slate-900 px-1 md:px-3 text-xs py-1'
          previousClassName=' text-slate-500  md:px-3 text-md rounded-xl'
          nextClassName=' text-slate-500  md:px-3 text-md rounded-xl'
          activeClassName='bg-slate-400 text-slate-50   text-md p-2'
        />      
      </div>
    </div>  
  )  
}

export default Home