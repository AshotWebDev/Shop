import React from 'react'
import './ProductItem.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDelProdMutation } from '../../store/slices/newProductAPI/newProductAPI'

function ProductItem({species, value, img, id}) {
  const navigate = useNavigate()
  const {pathname} = useLocation('')
  const [delProd] = useDelProdMutation()
  return (
    <div className='product-item' onClick={()=>pathname !== '/auth/admin' && navigate('/unique/showProduct/' + id)}>
        <div>
            <img width={100} src={img} />
        </div>
        <h3>{species}</h3>
        <span>{value} ₽</span>
        {pathname ==='/auth/admin' && <span className='xMark' onClick={async() => await delProd(id)}>X</span>}
    </div>
  )
}

export default ProductItem