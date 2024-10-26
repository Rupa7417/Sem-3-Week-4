import React from 'react'
import { Routes,Route } from 'react-router-dom'

import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from '../client/src/components/navbar'
import Footer from '../client/src/components/footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <ToastContainer position='bottom-right'/>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/result' element={<Result/>} />
        <Route path='/buy' element={<BuyCredit/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App