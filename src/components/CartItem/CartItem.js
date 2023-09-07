import React, { useEffect, useRef, useState } from 'react'
import './CartItem.css'
import { useCheckCountMutation, useDelCartMutation } from '../../store/slices/newProductAPI/newProductAPI'
import axios from 'axios'
function CartItem({img, id, value, species, count}) {
    const inpRef = useRef(null)

    const [delCart] = useDelCartMutation()

    const [checkCount] = useCheckCountMutation()

    
    const handleCheckCount = async() =>{
        const newBody = {
            id: id,
            img: img,
            value: value,
            species: species,
            count: inpRef.current.value,
        }
        await checkCount(newBody)
    }
  return (
    <div className='cart-item'>
        <img src={img} />
        <div className="div-info">
             <h2>{species}</h2>
             <span>{value} ₽</span>
             <span>{count}штук стоят {count * +value}</span>
             <input ref={inpRef} type="number" min={1} max={10} defaultValue={1} onClick={handleCheckCount}/>
             <button onClick={async () => await delCart(id)}>Удалить</button>               
        </div>
    </div>
  )
}

export default CartItem