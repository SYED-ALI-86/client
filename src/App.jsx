// import { useState } from "react";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Home from "./components/Home";
// import Product from "./components/Product";
// import { Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import ProductDetail from "./components/ProductDetail";
// import Saree from "./components/Saree";
// import SareeDetial from "./components/SareeDetial";
// import Signup from "./pages/Signup";
// import { ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Login from "./pages/Login";

// const App = ()=>{
//   const [data, setData]= useState(20)
//   return (
// //     <div className="d-flex text-center justify-content-center mx-auto mt-5">
// // <button onClick={()=>setData(data+1)} className="btn btn-primary rounded">increment</button>
// // <p className="mx-3">{data}</p>
// // <button onClick={()=>setData(data-1)} className="btn btn-info rounded">decrement</button>
// //     </div>

// <div>
//   <Navbar/>
// <Routes>
//   <Route path='/' element={<Home/>}></Route>
//   <Route path='/contact' element={<Contact/>}></Route>
//   <Route path='/about'  element={<About/>}></Route>
//   <Route path='/product' element={<Product/>}></Route>
//   <Route path='/signup' element={<Signup/>}></Route>
//   <Route path='/login' element={<Login/>}></Route>
//   <Route path='/saree' element={<Saree/>}></Route>
//   <Route path='/product/:id' element={<ProductDetail/>}></Route>
//   <Route path='/saree/:slug' element={<SareeDetial/>}></Route>
// </Routes>
// <ToastContainer/>
// </div>
//   )
// }

// export default App;
import React, {useState } from 'react'
import Form from './components/Form'
import Job from './components/Job'

const App = () => {
  const [show, setShow]=useState(false)
  const buttontoggle = ()=>{
    setShow(!show)
  }
  return (
    <div className='container'>
<div className='row'>
  <div className='col-md-4 '>
  <button onClick={buttontoggle}>
    {show? 'Show Form' : ''}
    {!show && <Form setShow={setShow}/>}
  </button>
  </div>

  <div className='col-md-6 mx-5'>
    <Job/>
  </div>

</div>

    </div>
  )
}

export default App
