import styled from 'styled-components';
import '../public/fonts/druk-wide-bold-cufonfonts-webfont/style.css';

export const HomePageContainer = styled.div`
    width: 100%;
    height: 100vh;
    color: #D9D9D9;
    position: relative;
    background: #040910;
`

export const AnnaPresentationArea = styled.div`
    color: #D9D9D9;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 50px;
`

export const PresentationText = styled.p`
    font-family: 'Druk Wide Bold Bold';
    font-size: 40px;
    font-weight: 700;
    line-height: normal;
    margin: 0px;
    position: relative;
    display: inline-block;
    color: transparent;
    -webkit-text-stroke: 2px #D9D9D9;
`

export const HiPresentationText = styled.p`
    font-family: 'Druk Wide Bold Bold';
    font-size: 60px;
    font-weight: 700;
    line-height: normal;
    margin: 0px;
    position: relative;
    display: inline-block;
    color: transparent;
    -webkit-text-stroke: 2px #D9D9D9;
`

export const AnnaName = styled.p`
    font-family: 'Druk Wide Bold Bold';
    font-size: 120px;
    font-weight: 700;
    line-height: normal;
    margin: 0px;
`