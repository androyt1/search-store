import React, {useState,useEffect,useCallback} from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { items } from './data/items'
import { IProduct } from './interfaces/product'

const App = () => {

  const[search,setSearch]=useState<string>('')
  const[products]=useState<IProduct[]>(items)
  const[prods,setProds]=useState<IProduct[]>(items)

  const handleSearch=(event: React.ChangeEvent<HTMLInputElement>)=>{
      setSearch(event.target.value)      
  } 

  const clearSearch=():void=>{
    setSearch('')
  }

  const filterProducts=useCallback(()=>{
    setProds(products.filter(product=>product.name.toLowerCase().includes(search.toLowerCase())))
  },[products,search])

  useEffect(()=>{
    filterProducts()
  },[filterProducts]) 


  return (
    <div>
      <Navbar search={search} handleSearch={handleSearch} clearSearch={clearSearch} />
      <Home products={prods} />
    </div>
  )
}

export default App