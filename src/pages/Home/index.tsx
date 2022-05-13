import React from "react";
import { Footer } from "../../components/Footer";
import { Banner } from "../../components/Banner";
import { NavBarMobile } from "../../components/NavBarMobile";

export function Home(){
    return(
        <>
            <NavBarMobile/>
            <Banner/>
            {/* <About/> */}
            {/* <Sellers/> */}
            {/* <Carrousel/> */}
            {/* <Brandlist/> */}
            {/* <Carrousel/> */}
            {/* <Form/> */}
            {/* <Instafeed/> */}
            <Footer/>
        </>
    )
}