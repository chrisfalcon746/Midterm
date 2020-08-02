import React from "react";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
    return(
        <Nav style={{ backgroundColor: "tomato" }} defaultActiveKey="/home" as="ul">
            <Nav.Item as ="li">
                <Nav.Link style={{ color: "#fff" }} href="/">
                    <strong>Home</strong>
                </Nav.Link>
            </Nav.Item>

            <Nav.Item as ="li">
                <Nav.Link style={{ color: "#fff" }} href="/random" eventKey="link-1">
                    Drink of the Day
                </Nav.Link>
            </Nav.Item>

            <Nav.Item as ="li">
                <Nav.Link style={{ color: "#fff" }} href="/AboutUs" eventKey="link-2">
                    About Us
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default NavBar;