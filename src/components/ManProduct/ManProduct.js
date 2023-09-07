import React, { useMemo } from 'react'
import { useGetNewProductQuery } from '../../store/slices/newProductAPI/newProductAPI'
import ProductItem from '../ProductItem/ProductItem'
import { useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import './ManProduct.css'
function ManProduct() {
    const {data = [], isError} = useGetNewProductQuery()

    const {pathname} = useLocation()

    const newProd = useMemo(()=>{
      return [...data.filter(prod => prod.gender === 'man')].reverse()
  },[data])

  return (
    <div className='man-product'>
          {pathname === '/manProduct' && <Header text='Для мужчин'/>}
         <div className='container'>
            {
                newProd.map(prod =>
                    <ProductItem key={prod.id} species={prod.species} value={prod.value} img={prod.img} id={prod.id} gender={prod.gender}/>
                )
            }
         </div>
    </div>
  )
}

export default ManProduct