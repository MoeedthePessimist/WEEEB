import React from 'react'
import Body from './Body'
import './CSS/Player.css'
import Footer from './Footer'
import Sidebar from './Sidebar'

function Player({ spotify }) {
    return (
        <div className = 'player'>
            
            <div className = 'player_body'>
            {/**Side bar*/}
            <Sidebar />

            {/**Body*/}
            <Body spotify = {spotify}/>

            </div>

            {/**Footer*/}
            <Footer spotify = {spotify}/>
        </div>
    )
}

export default Player
