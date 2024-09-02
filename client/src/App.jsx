
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthLayOut from './components/auth/layout'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import AdminLayout from './components/adminView/layout'
import AdminDashboard from './pages/adminView/dashboard'
import AdminFeatures from './pages/adminView/features'
import AdminProducts from './pages/adminView/products'
import ShoppingView from './components/shoppingView/layout'
import NotFound from './pages/notFound'
import ShoppingHome from './pages/shoppingView/home'
import ShoppingListing from './pages/shoppingView/listing'
import ShoppingCheckOut from './pages/shoppingView/checkOut'
import ShoppingAccount from './pages/shoppingView/account'



function App() {


  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route path='/auth' element={<AuthLayOut />}>
          {/* child route's element */}
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route path='dashboard' element={<AdminDashboard />} />
          <Route path='features' element={<AdminFeatures />} />
          <Route path='products' element={<AdminProducts />} />
        </Route>
        <Route path='/shop' element={<ShoppingView />}>
          <Route path='home' element={<ShoppingHome />} />
          <Route path='listing' element={<ShoppingListing />} />
          <Route path='checkout' element={<ShoppingCheckOut />} />
          <Route path='account' element={<ShoppingAccount />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
