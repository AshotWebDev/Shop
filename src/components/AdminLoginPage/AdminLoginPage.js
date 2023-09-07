import React, { useMemo, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetAdminQuery } from '../../store/slices/newProductAPI/newProductAPI'
import './AdminLoginPage.css'
function AdminLoginPage({setActiveAdmin}) {
    const {data = [], isError} = useGetAdminQuery()

    const formRef = useRef(null)
    const navigate = useNavigate()

    const admin = useMemo(()=>{
        return data[0]
    },[data])

    function handleSubmit(e) {
        e.preventDefault()
       if (formRef.current[0].value === admin.login && formRef.current[1].value === admin.password) {
            setActiveAdmin(true)
            navigate('/auth/admin')
       }
    }
  return (
    <div className='login-page'>
        <div className='container'>
          <h1>Go to Admin Panel</h1>
        <form className='log-form' ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder='admin-login' required/>
            <input type="password" placeholder='admin-password' required />
            <button>Sign In</button>
        </form>
    </div>
    </div>
  )
}

export default AdminLoginPage