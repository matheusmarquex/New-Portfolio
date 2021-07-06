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
            <Navbar bg="myGray" variant="dark" expand="lg">
                <Navbar.Brand className="imgNav">
                <img src={logoimg} width="40px" height="40px"/>
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



            {/* <div id="container-nav">
                <div id="container-nav2">
                    <div id="logo-nav">
                        <div>
                            <img src={logoimg} />
                        </div>
                        <div id="nome">
                            <a href="#"><h1>Matheus Marques</h1></a>
                        </div>
                    </div>
                    <div id="nav-emoji">
                        <nav id="nav">
                            <ul id="menu">
                                <li><a href="/">Início</a></li>
                                <li><a href="/">Sobre </a></li>
                                <li><a href="/">Skills</a></li>
                                <li><a href="/">Projetos</a></li>
                                <li><a href="/">Contato</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div> */}
        </>
    )
}