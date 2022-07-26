import alert from "bootstrap/js/src/alert";
import {Route, Routes} from "react-router-dom";
import Basket from "./pages/Basket";
import Admin from "./pages/Admin";
import React from "react";

export const AuthRouter = () =>{
  const isAuth = false

  if (isAuth === false) {
    console.log('Авторизуйтесь, чтобы посетить эту таблицу');
  } else {
    return (
      <Routes>
        <Route path='Basket' element={<Basket/>}/>
        <Route path='Admin' element={<Admin/>}/>
      </Routes>)
  }
}
export default AuthRouter