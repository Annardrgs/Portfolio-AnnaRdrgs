import styled from 'styled-components';
import '../../public/fonts/druk-wide-bold-cufonfonts-webfont/style.css';
import '../../public/fonts/AkzidenzGrotesk/style.css';

export const HomePageContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    color: #D9D9D9;
    position: relative;
    background: #D9D9D9;
    display: flex;
    overflow: hidden;
    
    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;

export const Textarea = styled.div`
    width: 100%;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 5%;
    
    @media screen and (min-width: 768px) {
        max-width: 50%;
        padding: 0 2% 0 5%;
    }
`;

export const AboutMeTitleDiv = styled.div`
    width: 100%;
`;

export const AboutMe = styled.p`
    font-family: 'Druk Wide Bold Bold';
    color: #CE1717;
    font-size: 6vw;
    max-font-size: 100px;
    margin: 0;
    line-height: 1;
    
    @media screen and (min-width: 1200px) {
        font-size: 100px;
    }
`;

export const AboutMeTextDiv = styled.div`
    width: 100%;
    max-width: 800px;
`;

export const AboutMeText = styled.p`
    font-family: 'Akzidenz Grotesk Pro Light';
    color: #040910;
    text-align: justify;
    line-height: 3vw;
    margin: 0;
    
    @media screen and (max-width: 768px) {
        font-size: 3.5vw;
        line-height: 4vw;
    }
    
    @media screen and (min-width: 1200px) {
        font-size: 28px;
        line-height: 40px;
    }
`;

export const AnnaIlustrationDiv = styled.div`
    display: flex;
    align-items: center;
    padding: 5%;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    
    @media screen and (min-width: 768px) {
        position: relative;
        transform: none;
        flex: 1;
        padding: 0;
    }
`;

export const AnnaIlustrationSVG = styled.div`
    width: 60%;
    max-width: 400px;
    
    @media screen and (min-width: 768px) {
        max-width: 60%;
    }

    @media screen and (max-width: 1000px) {
        max-width: calc(60vw - 400px);
    }
    
    @media screen and (max-width: 500px) {
        max-width: 500px;
    }
`;

export const AnnaIlustrationWink = styled.img`
    max-width: 100%;
`;

export const AnnaIlustration = styled.img`
    max-width: 100%;
`;
