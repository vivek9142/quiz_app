import { Button } from "react-bootstrap";
import './ButtonComp.styles.scss';

const ButtonComp = ({children,...props}) => {
    return (
        <Button className="button" {...props}>{children}</Button>
    )
}

export default ButtonComp;