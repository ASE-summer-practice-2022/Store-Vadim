import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {makeObservable} from "mobx";
import Shop from "../pages/Shop";
import MedicinePage from "../pages/MedicinePage";
import Basket from "../pages/Basket";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="Shop" element = {<Shop/>}/>
            <Route path="MedicinePage" element = {<MedicinePage/>}/>
            <Route path="Basket" element = {<Basket/>}/>
            <Route path="*" element = {<Shop/>}/>
        </Routes>


    );
};

export default AppRouter;
