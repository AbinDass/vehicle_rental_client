import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Auth from "../components/auth/Auth";
import Cars from "../pages/Cars";
import Bikes from "../pages/Bikes";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Productdetails from "../components/product/Productdetails";

const Userroutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/auth" element={<Auth />}></Route>
                <Route path="/cars" element={<Cars />}></Route>
                <Route path="/bikes" element={<Bikes />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>

                <Route path="/product/:id" element={<Productdetails />}></Route>
            </Routes>
        </div>
    );
};

export default Userroutes;
