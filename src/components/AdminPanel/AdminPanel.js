import React, { useRef } from 'react'
import { convertFileToBase64 } from '../../halpers/convertFunction'
import { useAddProdMutation } from '../../store/slices/newProductAPI/newProductAPI'
import NewProduct from '../NewProduct/NewProduct'
import './AdminPanel.css'
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom'
function AdminPanel({setActiveAdmin}) {
  const formRef = useRef(null)
  const navigate = useNavigate()
  const [addProd, {isError}] = useAddProdMutation()

  const  handleSubmit = async(e) => {
      e.preventDefault()

      const file = formRef.current[0].files[0]
    
      const convertedFile = await convertFileToBase64(file)

      const newProd = {
        species: formRef.current[1].value,
        value: formRef.current[2].value,
        img: convertedFile,
        gender: formRef.current[3].value,
        count: 1,
        info: formRef.current[4].value
      }
      await addProd(newProd)
  }

  function handleLogOut() {
    setActiveAdmin(false)
    navigate('/auth/login/admin')
  }
  return (
    <div className='admin-panel'>
        <Header text='Панель администратора'/>
       <div className='container'>
            <button className='log-out' onClick={handleLogOut}>Log-Out</button>
            <form ref={formRef} onSubmit={handleSubmit}>
                  <input type="file" accept='image/*'/>
                  <input type="text" placeholder='Текст'/>
                  <input type="text" placeholder='Цена'/>
                  <label for='type'>Выберите тип</label>
                  <select name='type' id='type'>
                        <option value="man">Мужмчинам</option>
                        <option value="woman">Женщинам</option>
                  </select>
                  <textarea cols="30" rows="10"></textarea>
                  <button >Add Product</button>
            </form>
            <NewProduct/>
        </div>
    </div>
  )
}

export default AdminPanel