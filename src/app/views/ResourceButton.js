import {Button} from "react-bootstrap";
import "./ResourceButton.css";

const ResourceCard = (props) => {
    return (
        <Button
            className={"resourceCard"}
            onClick={props.action}
        >
            {props.title}
        </Button>
    );
}

export default ResourceCard;