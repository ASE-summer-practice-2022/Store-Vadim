import React from 'react';
import {inject,observer} from "mobx-react"
import {Nav, Navbar} from "react-bootstrap";
import {Button, Container} from "@mui/material";
import {ThemeProvider} from "@mui/material";
import theme from "../styles/Themes";


const NavBar  = observer(() => {
    return (
        <Container>
            <ThemeProvider theme={theme}>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Button color='secondary' href="/Shop"> <h3><strong>Аптека <b> Москвичка </b></strong></h3> </Button>
                        <Nav className="d-flex justify-content-end">
                            <Button variant={"outline-light"} href="/Shop">Магазин</Button>
                            <Button color='primary' href="/MedicinePage">Каталог</Button>
                            <Button color='error' href="/Basket">Корзина</Button>
                        </Nav>
                    </Container>
                </Navbar>
            </ThemeProvider>
        </Container>

    );
});

export default NavBar;