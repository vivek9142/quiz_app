import React from 'react';
import { Button } from "react-bootstrap";
import './ButtonComp.styles.scss';

const ButtonComp = ({children,onClick}) => {
    return (
        <Button className="button" onClick={onClick}>{children}</Button>
    )
}

export default React.memo(ButtonComp);