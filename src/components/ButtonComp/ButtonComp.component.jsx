import { Button } from "react-bootstrap";
import './ButtonComp.styles.scss';

const ButtonComp = ({children}) => {
    return (
        <Button className="button">{children}</Button>
    )
}

export default ButtonComp;