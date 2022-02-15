import React from "react";
import { AuthProvider } from "./components/auth";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import RequireAuth from "./components/RequireAuth";
import FetchData from "./components/api/FetchData";
import Register from "./components/Register";
const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    // <div className='App'>
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='about'
          element={
            <React.Suspense fallback='...Loading'>
              <LazyAbout />
            </React.Suspense>
          }
        />
        {/* <Route path='order-confirmed' element={<OrderSummary />} />
        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new-products' element={<NewProducts />} />
        </Route>
        <Route path='users' element={<User />}>
          <Route path=':userId' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
        </Route> */}
        <Route
          path='profile'
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path='fetch-data'
          element={
            <RequireAuth>
              <FetchData />
            </RequireAuth>
          }
        />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      {/* </div> */}
    </AuthProvider>
  );
}

export default App;
