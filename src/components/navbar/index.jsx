import React from 'react'
import '../navbar/navbar.css'
import logoimg from '../../assets/imgs/onigiri.png'
import solimg from '../../assets/imgs/sol.png'
import luaimg from '../../assets/imgs/lua.png'
import hambmenu from '../../assets/imgs/hamb.png'


export default function navBar() {

    return (
        <>
            <div id="container-nav">
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
                        <div id="sol">
                            <img src={solimg} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}