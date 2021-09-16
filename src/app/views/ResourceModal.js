import {Modal} from "react-bootstrap";

const ResourceModal = (props) => {
    return (
        <Modal show={props.isVisible} onHide={props.exit} closeButton>
            <Modal.Header>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>
        </Modal>
    );
}

export default ResourceModal;