import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import Logo from "../assets/images/Zotbotics Sponsorship1.png";

const GlobalNavBar = () => {
    return (
        <Navbar bg = "light" expand = "sm">
            <Navbar.Brand href = "/">
                <img src = {Logo} alt = "Logo" width = "50px" height = "50px"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls = "navbar"/>
            <Navbar.Collapse id = "navbar">
                <Nav className = "mr-auto">
                    <Nav.Link href = "/">Home</Nav.Link>
                    <Nav.Link href = "/interested-students">Interested Students</Nav.Link>
                    <Nav.Link href = "/resources">Resources</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default GlobalNavBar;