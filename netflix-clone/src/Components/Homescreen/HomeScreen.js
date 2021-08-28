import React from 'react'
import './CSS/HomeScreen.css'
import Nav from './Nav'
import Banner from './Banner'
import requests from '../Request'
import Row from './Row'

function HomeScreen() {
    return (
        <div className = 'homeScreen'>

            {/* Nav bar*/}
            <Nav />
            {/* Banner */}
            <Banner />
            {/* Row */}
            <Row 
            title = 'NETFLIX ORIGINALS' 
            fetchURL = {requests.fetchNetflixOriginals} 
            isLargeRow/>

            <Row 
            title = 'TRENDING' 
            fetchURL = {requests.fetchTrending} 
            />

            <Row 
            title = 'COMEDY' 
            fetchURL = {requests.fetchComedyMovies} 
            />

            <Row 
            title = 'DOCUMENTARIES' 
            fetchURL = {requests.fetchDocumentaries} 
            />

            <Row 
            title = 'ROMANCE' 
            fetchURL = {requests.fetchRomanceMovies} 
            />

            <Row 
            title = 'HORROR' 
            fetchURL = {requests.fetchHorrorMovies} 
            />

        </div>
    )
}

export default HomeScreen;