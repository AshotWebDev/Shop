import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomeWraper from './page/HomeWraper';
import NewProduct from './components/NewProduct/NewProduct';
import AdminPanel from './components/AdminPanel/AdminPanel';
import ManProduct from './components/ManProduct/ManProduct';
import WomenProduct from './components/WomenProduct/WomenProduct';
import ShowProduct from './components/ShowProduct/ShowProduct';
import AdminLoginPage from './components/AdminLoginPage/AdminLoginPage';
import { useState } from 'react';
import CartPage from './components/CartPage/CartPage';


function App() {
  const [activeAdmin, setActiveAdmin] = useState(false)
  

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<HomeWraper/>}>
              <Route index element={<NewProduct/>}/>
              <Route path='WomenProduct' element={<WomenProduct/>}/>
              <Route path='manProduct' element={<ManProduct/>}/>
              <Route path='cart' element={<CartPage/>}/>
              <Route path='/unique'>
                    <Route path='showProduct/:id' element={<ShowProduct/>}/>
              </Route>
          </Route>
          <Route path='/auth'>
              {activeAdmin && <Route path='admin' element={<AdminPanel {...{setActiveAdmin}}/>}/>}
              <Route path='login/admin' element={<AdminLoginPage {...{setActiveAdmin}}/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;

