import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Cards1 from '../../components/slider/Cards1'
import Cards2 from '../../components/slider/Cards2'
import Banner2 from '../../components/banners/Banner2'
import Banner1 from '../../components/banners/Banner1'
import Banner3 from '../../components/banners/Banner3'

function Home() {
    return (
        <>
            <Navbar/>
            <Banner2/>
            <Cards1/>
            <Banner1/>
            <Cards2/>
            <Banner3/>
            <Footer/>
        </>
    )
}

export default Home
