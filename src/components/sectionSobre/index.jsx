import React from 'react'
import './sectionSobre.css'
import fundo from '../../assets/imgs/Endless-Constellation.svg'
import foto from '../../assets/imgs/takumi.jpg'

export default function sectionSobre() {
    return (
        <>
            <div id="container" style={{ backgroundImage: `url(${fundo})` }}>
                <div id="container2" >
                    <div id="foto">
                    <img src={foto}/>
                    </div>
                    <div id="nome">
                        <h2>Matheus Marques Cardoso</h2>
                    </div>
                </div>

            </div>
        </>
    )
}