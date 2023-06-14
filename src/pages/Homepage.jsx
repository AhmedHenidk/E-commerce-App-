import styled from "styled-components"
import Navbar from "../components/Navbar"
import Categories from "../components/Categories"
import Slider from "../components/Slider"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

const Homepage = () => {
  return (
    <Container>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}
const Container=styled.div``

export default Homepage