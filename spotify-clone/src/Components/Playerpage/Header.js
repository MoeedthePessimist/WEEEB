import React from 'react'
import './CSS/Header.css'
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core'
import { useStateProviderValue } from '../StateProvider'

function Header({ Spotify }) {

    const [{ user }, dispatch] = useStateProviderValue();

    return (
        <div className = 'header'>
            <div className = 'header_left'>
                <SearchIcon />
                <input placeholder = 'Search Artists and Songs' type = 'text' />

            </div>

            <div className = 'header_right'>
                <Avatar src={user?.images[0]?.url} alt = {user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
