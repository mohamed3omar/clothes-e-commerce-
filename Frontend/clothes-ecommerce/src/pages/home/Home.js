import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Carousel from '../../components/slider/Carousel'
import Banner1 from '../../components/banners/Banner1'
function Home() {
    return (
        <>
            <Navbar/>
            <Banner1/>
            <Carousel/>
            <Footer/>
        </>
    )
}

export default Home
