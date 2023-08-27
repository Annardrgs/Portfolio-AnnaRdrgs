"use client";
import * as React from "react";
import SideNav from "../../components/SideNav/SideNav"
import Footer from "../../components/Footer/WhiteFooter"

import { 
    HomePageContainer,
    AnnaPresentationArea,
    HiPresentationText,
    AnnaName,
    PresentationText,
} from "./style"

export default function HomePage() {
    return (
        <HomePageContainer>
            <AnnaPresentationArea>
            <HiPresentationText>Hi, I’m</HiPresentationText>
            <AnnaName>Anna Clara Rodrigues</AnnaName>
            <PresentationText>Junior Software Developer</PresentationText>
            </AnnaPresentationArea>
            <Footer/>
            <SideNav></SideNav>
        </HomePageContainer>
    )
}