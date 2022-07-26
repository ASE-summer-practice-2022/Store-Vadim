import React from 'react';
import {Container} from "@mui/material";
import {Col, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";

const Shop = () => {
    return (
        <Container>
            <Row>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={7}>

                </Col>
            </Row>
        </Container>
    );
};

export default Shop;