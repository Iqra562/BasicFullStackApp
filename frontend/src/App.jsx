import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  const [products, serProducts] = useState([])
  
  useEffect(()=>{
    axios.get('/api/products')
    .then((response)=>{
    serProducts(response.data)
    })
    .catch((error)=>{
    console.log(error)
    })
  })

  return (
    <>
       <h1>basic  fullstack project </h1>
       <p>PRODUCTS: {products.length}</p>
       {
        products.map((product,index)=>(
         <div key={index}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>

         </div>
        ))
       }

    </>
  )
}

export default App
