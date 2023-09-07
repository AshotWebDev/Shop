import React, { useEffect } from 'react'
import NavMenuItem from '../NavMenuItem/NavMenuItem'
import './NavMenu.css'
function NavMenu({activeMenu, setActiveMenu}) {
 

  useEffect(()=>{
    const handleResize = () =>{
      if(window.innerWidth <= 720){
        setActiveMenu(false)
      }
      else{
        setActiveMenu(true)
      }
    };
    window.addEventListener('resize', handleResize)

    return ()=> {
      window.removeEventListener('resize', handleResize)
    }
  },[])

  return (
        <ul style={{transform: activeMenu? 'translateX(0)': 'translateX(120%)'}} className='nav-menu'>
            <NavMenuItem name='Новинки' path='/'/>
            <NavMenuItem name='Женщинам' path='/womenProduct'/>
            <NavMenuItem name='Мужмчинам' path='/manProduct'/>
        </ul>
  )
}

export default NavMenu