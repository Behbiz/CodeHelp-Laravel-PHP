import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../views/Home.jsx'
import List from '../views/List.jsx'
import Edit from '../views/Edit.jsx'
import Create from '../views/Create.jsx'


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/list' element={<List/>}></Route>
            <Route path='/edit' element={<Edit/>}></Route>
            <Route path='/create' element={<Create/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router