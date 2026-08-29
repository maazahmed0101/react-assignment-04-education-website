import React from "react";
import { BrowserRouter, Routes ,  Route} from "react-router-dom";
import Home from "../pages/Home.jsx";

export default function Rte() {
  return (
    <>
    <BrowserRouter>
     <Routes>
        <Route path='/About' element={<Home />} />
        <Route path='/about 'element={<about />} />
        {/* <Route path='/cources' element={} /> */}
        <Route path='//src' element={<Home />} />
        <Route path='/' element={<Home />}  / >

     </Routes>

    </BrowserRouter>
    </>
  );
}
