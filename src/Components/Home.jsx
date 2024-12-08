import React, { useState } from 'react'
import data from "../assets/Product.json"
import UniqueProduct from './Product'
import "./Home.css"
const Home = ({cart,setCart}) => {
    const [Products]=useState(data)
  return (
    <div className='ProductContainer'>
       {Products.map((ProductList)=>(
       
          
        <UniqueProduct key={ProductList.id} ProductList={ProductList} cart={cart} setCart={setCart}/>



       ))}

    </div>
  )
}

export default Home