import React from 'react'
import {  Route, Routes } from 'react-router-dom'

import Listining from '../pages/listing/Listining'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Home from '../pages/home/Home'
import SignIn from '../pages/auth/SignIn'
import SignUp from '../pages/auth/SignUp'
import DetailsPage from '../components/DetailsPage/DetailsPage'

const Router = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route  path="/auth/signin" element={<SignIn />} />
        <Route  path="/auth/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/listining" element={<Listining />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default Router
