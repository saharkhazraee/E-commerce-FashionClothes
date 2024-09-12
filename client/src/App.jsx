
import { Navigate, Route, Routes, useSearchParams } from 'react-router-dom'
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
import { useDispatch, useSelector } from 'react-redux'
import Unauth from './pages/unauth'
import ShoppingLayout from './components/shoppingView/layout'
import CheckAuth from './components/common/check-auth'
import { useEffect } from "react";
import AdminOrders from './pages/adminView/orders'


function App() {

 const {token,user}=useSelector(state=>state.auth)
 const isAdmin = user?.role == 'admin'
 useEffect(() => {
  console.log("User:", user, "Token:", token);
  console.log("Is Admin:", isAdmin);
}, [user, token, isAdmin]);
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route path='/auth' 
        element={!token?(<AuthLayOut />):!isAdmin?(<Navigate to={'/shop/listing'}/>):<Navigate to={'/admin/dashboard'}/>}
        >
          {/* child route's element */}
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
        <Route path='/admin' 
        element={isAdmin?<AdminLayout />:<Navigate to={'/unauth'}/>}
      
        // element={<AdminLayout />}
        >
          <Route path='dashboard' element={<AdminDashboard />} />
          <Route path='features' element={<AdminFeatures />} />
          <Route path='products' element={<AdminProducts />} />
          <Route path='orders' element={<AdminOrders />} />
        </Route>
        <Route
          path="/shop"
          element={
              <ShoppingLayout/>
          }
        >
          <Route path="home" element={<ShoppingHome />} />
          <Route path='listing' element={token?<ShoppingListing />:<Navigate to={'/auth/login'}/>} />
          <Route path='checkout'  element={token?<ShoppingCheckOut />:<Navigate to={'/auth/login'}/>}/>
          <Route path='account' element={token?<ShoppingAccount />:<Navigate to={'/auth/login'}/>}/>
        </Route>
        <Route path='/unauth' element={<Unauth />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App


// import { Navigate, Route, Routes, useSearchParams } from 'react-router-dom'
// import './App.css'



// import AdminLayout from './components/adminView/layout'
// import AdminDashboard from './pages/adminView/dashboard'
// import AdminFeatures from './pages/adminView/features'
// import AdminProducts from './pages/adminView/products'
// import ShoppingView from './components/shoppingView/layout'
// import NotFound from './pages/notFound'
// import ShoppingHome from './pages/shoppingView/home'
// import ShoppingListing from './pages/shoppingView/listing'
// import ShoppingCheckOut from './pages/shoppingView/checkOut'
// import ShoppingAccount from './pages/shoppingView/account'
// import { useDispatch, useSelector } from 'react-redux'
// import Unauth from './pages/unauth'
// import ShoppingLayout from './components/shoppingView/layout'
// import CheckAuth from './components/common/check-auth'
// import { useEffect } from "react";
// import AuthLayOut from './components/auth/layout'
// import Login from './pages/auth/login'
// import Register from './pages/auth/register'
// import AdminOrders from './pages/adminView/orders'
// function App() {
//   const { user, isAuthenticated, isLoading } = useSelector(
//     (state) => state.auth
//   );
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(CheckAuth());
//   }, [dispatch]);

//   if (isLoading) return <Skeleton className="w-[800] bg-black h-[600px]" />;

//   console.log(isLoading, user);

//   return (
//     <div className="flex flex-col overflow-hidden bg-white">
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <CheckAuth
//               isAuthenticated={isAuthenticated}
//               user={user}
//             ></CheckAuth>
//           }
//         />
//         <Route
//           path="/auth"
//           element={
//             <CheckAuth isAuthenticated={isAuthenticated} user={user}>
//               <AuthLayOut/>
//             </CheckAuth>
//           }
//         >
//           <Route path="login" element={<Login/>} />
//           <Route path="register" element={<Register />} />
//         </Route>
//         <Route
//           path="/admin"
//           element={
//             <CheckAuth isAuthenticated={isAuthenticated} user={user}>
//               <AdminLayout />
//             </CheckAuth>
//           }
//         >
//           <Route path="dashboard" element={<AdminDashboard />} />
//           <Route path="products" element={<AdminProducts />} />
//           <Route path="orders" element={<AdminOrders/>} />
//           <Route path="features" element={<AdminFeatures />} />
//         </Route>
//         <Route
//           path="/shop"
//           element={
//             <CheckAuth isAuthenticated={isAuthenticated} user={user}>
//               <ShoppingLayout />
//             </CheckAuth>
//           }
//         >
//           <Route path="home" element={<ShoppingHome />} />
//           <Route path="listing" element={<ShoppingListing />} />
//           <Route path="checkout" element={<ShoppingCheckOut/>} />
//           <Route path="account" element={<ShoppingAccount />} />
          
          
         
//         </Route>
//         <Route path="/unauth-page" element={<Unauth />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
