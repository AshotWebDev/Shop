import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { useGetNewProductQuery } from '../../store/slices/newProductAPI/newProductAPI'
import ProductItem from '../ProductItem/ProductItem'
import Header from '../Header/Header'
import './WomenProduct.css'
function WomenProduct() {
  const {data = [], isError} = useGetNewProductQuery()

  const {pathname} = useLocation()

  const newProd = useMemo(()=>{
    return[... data.filter(prod => prod.gender === 'woman')].reverse()
},[data])

return (
  <div className='woman-product'>
        {pathname === '/womenProduct' && <Header text='Для женщин'/>}
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

export default WomenProduct