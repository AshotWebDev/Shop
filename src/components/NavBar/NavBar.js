import React, { useMemo, useState } from 'react'
import NavMenu from '../NavMenu/NavMenu'
import './NavBar.css'
import {cartIcon} from '../../icon'
import { useGetCartQuery } from '../../store/slices/newProductAPI/newProductAPI'
import { useNavigate } from 'react-router-dom'

function NavBar() {
  const [activeMenu, setActiveMenu] = useState(false)

  const {data = []} = useGetCartQuery()
  const navigate = useNavigate()
  return (
    <div className='nav-bar'>
        <div className='container'>
            <h1>T SHOP</h1>
            <NavMenu {...{activeMenu, setActiveMenu}}/>
            <div className='cart-icon' onClick={()=>navigate('/cart')}>{cartIcon}
              {data.length !== 0 && <span className="cart-count">{data.length}</span>}
            </div>
           <div className="barc" onClick={()=>setActiveMenu(!activeMenu)}>
              <div className={ activeMenu ? 'activeXmark':''} />
              <div className={ activeMenu ? 'activeXmark':''} />
              <div className={ activeMenu ? 'activeXmark':''} />
          </div> 
        </div>
    </div>
  )
}

export default NavBar