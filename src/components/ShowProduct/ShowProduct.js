import React, { useMemo} from 'react'
import { useParams } from 'react-router-dom'
import './ShowProduct.css'
import {useAddCartMutation, useGetNewProductQuery } from '../../store/slices/newProductAPI/newProductAPI'
import Header from '../Header/Header'
function ShowProduct() {
    const {data = []} = useGetNewProductQuery()
    const [addCart] = useAddCartMutation()
    const {id} = useParams()

    const newProd = useMemo(()=>{
       return data.filter(prod => prod.id == id)
       
    },[data])

    const cart = useMemo(()=>{
        const res = data.filter(prod => prod.id == id)
        return {...res[0]}
    },[data])

    const handleClick = async()=>{
      await addCart(cart)
    }
  return (
    <div className='unique-prod'>
        <Header text='Подробная информация о желаемом продукте'/>
        <div className='container'>
            {
                newProd.map(prod =>
                    <div key={prod.id} className='unique-prod-item'>
                        <div className='unique-prod-left'>
                            <img src={prod.img} />
                    </div>
                    <div className='unique-prod-right'>
                            <h2>{prod.species}</h2>
                            <span>Артикул: {'0' + id}</span>
                            <span>{prod.value} ₽</span>
                            <button className='add-btn' onClick={handleClick}>Добавить в корзину</button>
                                <h3>О ТОВАРЕ</h3>
                                <textarea cols="30" rows="10" readOnly defaultValue={prod.info} ></textarea>
                    </div>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default ShowProduct