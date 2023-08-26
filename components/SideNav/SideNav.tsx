import * as React from "react";
import { 
    SideNavDiv,
    Home,
    About,
    Work,
    Experience,
    Contact,
    MenuTitle
} from './style'

const SideNav = () => {
    return(
        <SideNavDiv>
            <Home>
                <MenuTitle>Home</MenuTitle>
            </Home>
            <About>
                <MenuTitle>About</MenuTitle>
            </About>
            <Work>
                <MenuTitle>Work</MenuTitle>
            </Work>
            <Experience>
                <MenuTitle>Experience</MenuTitle>
            </Experience>
            <Contact>
                <MenuTitle>Contact</MenuTitle>
            </Contact>
        </SideNavDiv>
    )
}

export default SideNav;