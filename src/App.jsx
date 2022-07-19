import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {ThemeProvider} from "@mui/material";
import theme from "./styles/Themes";
import { Button } from '@mui/material';
import {Navbar} from "react-bootstrap";
import NavBar from "./components/NavBar";
import TypeBar from "./components/TypeBar";

const App = () => {
    return(
        <ThemeProvider theme={theme}>
        <BrowserRouter>
            <NavBar />
            {/*<Button color='secondary'>бебебе*/}
            {/*</Button>*/}
            <AppRouter />
        </BrowserRouter>
        </ThemeProvider>
    )
}
export default App