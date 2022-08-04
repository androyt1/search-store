import React,{useState} from 'react'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineArrowLeft} from 'react-icons/ai'

interface ISearch{
    search:string
    handleSearch(event: React.ChangeEvent<HTMLInputElement>):void
    clearSearch():void
}


const Navbar = ({search,handleSearch,clearSearch}:ISearch) => {

  const[show,setShow]=useState<boolean>(false)

  const toggler=():void=>{
    setShow(prevState=>!prevState)
  }

  return (
    <div className='w-full h-[90px] shadow-lg shadow-slate-300 mb-10 flex justify-between items-center px-3 md:px-10 sticky top-0 z-[10] bg-white'>
        <h6 className={`uppercase font-semibold text-xl ${show ? 'hidden':'flex'}`}>Persona</h6>
        
        <div className='hidden md:flex md:w-[40%] '>
            <input type="text" placeholder='Search for a Shirt' className='outline-none border-[1px] border-slate-400 py-1 w-full px-1' name='search' value={search}  onChange={handleSearch} />
            <button className='py-1 bg-slate-500 px-6'><BsSearch className='text-2xl text-white'/></button>
        </div>
        
        <ul className={`relative  flex  items-center ${show ? 'w-full justify-center':'justify-end'}`}>
            <li className={`text-xs ml-4 ${show ? 'hidden':'inline-block'}`}>Home</li>
            <li className={`text-xs ml-4 ${show ? 'hidden':'inline-block'}`}>Shop</li>
            <li  className={`inline-block text-xs  w-full`}><div className={`flex w-full px-3 ${show ? 'flex':'hidden'} `}>
              <AiOutlineArrowLeft className='text-3xl mr-2' onClick={()=>{
                toggler()
                clearSearch()
              }}/>
              <input type="text" className='w-full bg-slate-200 outline-none px-1' name='search' value={search}  onChange={handleSearch}  />
              <BsSearch className='text-3xl ml-2'/> 
              </div></li>
              <li className={`text-xs ml-4 ${show ? 'hidden':'inline-block'} `}> <BsSearch className={`text-2xl ml-2 ${show ?'hidden':'flex'}`} onClick={toggler}/></li>
        </ul>
    </div>
  )
}

export default Navbar