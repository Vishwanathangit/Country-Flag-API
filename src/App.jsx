import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import './App.css'
import CountryList from './pages/CountryList'
import CountryDetails from './pages/CountryDetails'

function App() {
 
 return (
    <div>
   <BrowserRouter>
   <Routes>
    <Route path="/" exact element={<CountryList/>}></Route>
    <Route path="/Country/:name" exact element={<CountryDetails/>}></Route>
   </Routes>
   </BrowserRouter>
  </div>
  )
}

export default App
