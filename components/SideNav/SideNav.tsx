import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SideNavDiv, MenuTitle } from './style';

const SideNav = () => {
    const location = useLocation();
    const [activePage, setActivePage] = React.useState(location.pathname);

    React.useEffect(() => {
        setActivePage(location.pathname);
    }, [location.pathname]);

    return (
        <SideNavDiv>
            <Link to="/" className={activePage === '/' ? 'active' : ''}>
                <MenuTitle>Home</MenuTitle>
            </Link>
            <Link to="/about" className={activePage === '/about' ? 'active' : ''}>
                <MenuTitle>About</MenuTitle>
            </Link>
            <Link to="/work" className={activePage === '/work' ? 'active' : ''}>
                <MenuTitle>Work</MenuTitle>
            </Link>
            <Link to="/experience" className={activePage === '/experience' ? 'active' : ''}>
                <MenuTitle>Experience</MenuTitle>
            </Link>
            <Link to="/contact" className={activePage === '/contact' ? 'active' : ''}>
                <MenuTitle>Contact</MenuTitle>
            </Link>
        </SideNavDiv>
    );
};

export default SideNav;
