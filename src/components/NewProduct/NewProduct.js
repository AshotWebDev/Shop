import React, { useMemo } from 'react'
import { useGetNewProductQuery } from '../../store/slices/newProductAPI/newProductAPI'
import ProductItem from '../ProductItem/ProductItem'
import './NewProduct.css'
import Header from '../Header/Header'
import { useLocation } from 'react-router-dom'

function NewProduct() {

  const {data = [],  isLoading} = useGetNewProductQuery()
  const {pathname} = useLocation()
  const newProd = useMemo(()=>{
    return [...data].reverse()
  },[data])

  return (
    <div className='new-Prod-Items'>
         {pathname === '/' && <Header text='Наши новинки'/>}
        <div className='container'>
            {
              newProd.map(prod=> 
                <ProductItem key={prod.id} species={prod.species} value={prod.value} img={prod.img} id={prod.id} gender={prod.gender}/>
              )
            }
        </div>
    </div>
  )
}

export default NewProduct