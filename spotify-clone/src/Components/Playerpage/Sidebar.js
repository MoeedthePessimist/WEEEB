import React from 'react'
import './CSS/Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import Playlists from './Playlists';
import { useStateProviderValue } from '../StateProvider';

function Sidebar() {

    const [{ playlists }, dispatch] = useStateProviderValue();

    return (
        <div className = 'sidebar'>
            <img className = 'sidebar_logo' src = 'https://logodownload.org/wp-content/uploads/2016/09/spotify-logo-branca-white.png' alt = '' />
            <SidebarOption Icon = {HomeIcon} title = "Home" />
            <SidebarOption Icon = {SearchIcon} title = "Search" />
            <SidebarOption Icon = {LibraryMusicIcon} title = "Your Library" />
            <br />
            <strong className = 'sidebar_title'>PLAYLISTS</strong>
            <hr />
            {console.log('Assigned action.playlist to playlist >>> ', playlists)}
            {playlists?.items?.map(playlist => (
                <Playlists title = {playlist.name} />
            ))}

        </div>

    )
}

export default Sidebar
