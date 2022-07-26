import React, {useContext} from 'react';
import {observer} from "mobx-react";
import {Context} from "../index";
import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => {
    const {pills} = useContext(Context)
    return (
        <ListGroup>
            {pills.types.map(pills =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active={item.id === pills.selectedPills.id}
                    onClick={() => pills.setSelectedPills(pills)}
                    key={pills.id}
                >
                    {pills.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;