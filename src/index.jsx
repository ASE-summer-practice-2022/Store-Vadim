import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import AppStore from "./store/AppStore";
import UserStore from "./store/UserStore";

export const {Context} = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));


   root.render(
    <Context.Provider value={{
        user: new UserStore(),
        app: new AppStore()
    }}>
         <App />
    </Context.Provider>,
       document.getElementById('root')
    //  <React.StrictMode>
    //
    // </React.StrictMode>
);
