"use client";
import * as React from "react";
import SideNav from "../../components/SideNav/SideNav"
import Footer from "../../components/Footer/BlackFooter"

import { 
    HomePageContainer,
    Textarea,
    AboutMeTitleDiv,
    AboutMe,
    AboutMeTextDiv,
    AboutMeText,
    AnnaIlustrationDiv,
    AnnaIlustrationSVG,
    AnnaIlustrationWink,
    AnnaIlustration
} from "./style"

export default function AboutPage() {
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <HomePageContainer>
            <Textarea>
                <AboutMeTitleDiv>
                    <AboutMe style={{marginBottom: '0px'}}>
                        ABOUT ME
                    </AboutMe>
                </AboutMeTitleDiv>
                <AboutMeTextDiv>
                    <AboutMeText>
                        Experienced computer science student with a passion for creating user-focused products and working collaboratively with managers and developers. Strong believer in the importance of programming fundamentals for professional growth, regardless of the language or framework in use. Currently pursuing a bachelor’s degree in computer science at Federal Fluminense University, expected to graduate in December 2025.
                    </AboutMeText>
                </AboutMeTextDiv>
            </Textarea>
            <AnnaIlustrationDiv>
                <AnnaIlustrationSVG
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {isHovered ? <AnnaIlustrationWink src='AnnaIlustrationWink.svg'/> : <AnnaIlustration src='AnnaIlustration.svg'/>}
                </AnnaIlustrationSVG>
            </AnnaIlustrationDiv>
            <Footer/>
            <SideNav></SideNav>
        </HomePageContainer>
    )
}
