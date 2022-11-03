import React from 'react';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner'
import Intro from './Components/Intro/Intro'
import About from './Components/About/About'
import './Styles/index.css'

export default function App () {
    return (
        <>
            <Header/>
            <Banner/>
            <Intro/>
            <About/>
        </>
    )
}