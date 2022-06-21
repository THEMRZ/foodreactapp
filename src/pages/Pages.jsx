import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { Route, Routes } from "react-router-dom";

function Pages() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cuisine/:type' element={<Cuisine />} /> {/*:type para a rota ficar dinamica exemplo /italiana ou /Japanese...*/}
            <Route path='searched/:search' element={<Searched />} />
            <Route path='/recipe/:name' element={<Recipe />} />
        </Routes>
    )
}

export default Pages
