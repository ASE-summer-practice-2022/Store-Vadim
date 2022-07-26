import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
//import {makeObservable} from "mobx";
import Shop from "../pages/Shop";
import MedicinePage from "../pages/MedicinePage";
import Basket from "../pages/Basket";
import Auth from "../pages/Auth";
import Admin from "../pages/Admin";
import alert from "bootstrap/js/src/alert";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)

    //console.log(user)
  return true
  return (
      <Routes>
          <Route path="Shop" element = {<Shop/>}/>
          <Route path="MedicinePage" element = {<MedicinePage/>+"/:id"}/>
          <Route path="*" element = {<Shop/>}/>
          <Route path='login' element={<Auth/>}/>
          <Route path='Registration' element={<Auth/>}/>
      </Routes>


  );
};
export default AppRouter;

