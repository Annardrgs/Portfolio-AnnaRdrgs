import styled from 'styled-components';
import '../../public/fonts/AkzidenzGrotesk/style.css';

export const SideNavDiv = styled.div`
    background: #D9D9D9;
    width: 200px;
    height: 100%;
    position: fixed;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-left: 2px solid #040910
`

export const MenuTitle = styled.p`
    font-family: 'Akzidenz Grotesk Pro Light';
    font-size: 25px;
    color: #040910;
    writing-mode: vertical-lr;
    transform: rotate(360deg);
    margin: 0;
`