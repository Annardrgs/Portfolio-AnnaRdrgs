import * as React from "react";
import SideNav from "../../components/SideNav/SideNav";
import Footer from "../../components/Footer/BlackFooter";
import { HomePageContainer } from "./style";
import WIPSVG from '../../public/WorkInProgressSVG.svg';
import WIPPNG from '../../public/WorkInProgressPNG.png';

export default function WorkPage() {
    return (
        <HomePageContainer className="WIPBackground">
            <p>aaaaaaa</p>
            <Footer />
            <SideNav />
        </HomePageContainer>
    );
}
