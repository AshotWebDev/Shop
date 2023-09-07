import React, { useMemo } from 'react'
import { useGetCartQuery } from '../../store/slices/newProductAPI/newProductAPI'
import CartItem from '../CartItem/CartItem'
import './CartPage.css'
import Header from '../Header/Header'

function CartPage() {
const {data = []} = useGetCartQuery()

const cart = useMemo(()=>{
  return [...data].reverse()
},[data])

  return (
    <div className='cart-page'>
      <Header text='Корзина'/>
       <div className='container'>
            {
              cart.map(prod => 
                <div className='cart-items' key={prod.id}>
                    <CartItem key={prod.id} img={prod.img} count={prod.count} id={prod.id} value={prod.value} gender={prod.gender} species={prod.species} info={prod.info}/>
                </div>
              )
            }
            <h3>Общая ценность {cart.reduce((acc, el) => acc + el.count * (+el.value),0)} ₽</h3>
       </div>

    </div>
  )
}

export default CartPage