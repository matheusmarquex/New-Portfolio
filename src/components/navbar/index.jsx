import React from 'react'
import '../navbar/navbar.css'
import logoimg from '../../assets/imgs/onigiri.png'
import solimg from '../../assets/imgs/sol.png'
import luaimg from '../../assets/imgs/lua.png'

import 'bootstrap/dist/css/bootstrap.css'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'


export default function navBar() {

    return (
        <>
            {/* mobile menu */}
            <Navbar bg="myGray" variant="dark" expand="lg" 
            fixed="top" 
            >
                <Navbar.Brand className="imgNav">
                <p style={{fontSize: "40px"}}>🍙</p>
                </Navbar.Brand>
                <Navbar.Toggle className="toggle"/>

                <Navbar.Collapse>

                <Nav className="itens">
                    <Nav.Link href="">Início</Nav.Link>
                    <Nav.Link href="">Sobre</Nav.Link>
                    <Nav.Link href="">Skills</Nav.Link>
                    <NavDropdown title="Projetos">
                        <NavDropdown.Item href="Projetos/loading...">Loading...</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#">Contato</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        </>
    )
}