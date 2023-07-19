import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Contact from './routes/Contact'
import Training from './routes/Training'
import Pricing from './routes/Pricing'


export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/training' element={<Training/>}></Route>
        <Route path='/pricing' element={<Pricing/>}></Route>
      </Routes>
    </div>
  )
}
