import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav';
import Footer from './components/footer';
import Home from './components/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './components/products';
import NavBar2 from './components/nav2';
import { useState } from 'react';
import axios from 'axios';
import AddProduct from './components/addproduct';
import ProductList from './components/list';
import { useEffect } from 'react';
import NotfoundPage from './components/pagenot';
function App(){

  return (
    <>
   <NavBar/>
 <BrowserRouter>
 <Routes>
 <Route path='/' element={<Home/>}></Route>
 <Route path='/Products' element={<ProductList/>}></Route>
 <Route path='/add' element={<AddProduct/>}></Route>
 <Route path='/list' element={<ProductList/>}></Route>
 <Route path='/*' element={<NotfoundPage/>}></Route>
 </Routes>
 </BrowserRouter>
   
   <Footer/>
   </>
  );

}

export default App;
