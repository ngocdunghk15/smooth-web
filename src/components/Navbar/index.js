import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu, NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElement'
const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        setScrollNav(window.scrollY >= 80)
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav);
        return () => {
            window.removeEventListener('scroll', changeNav)
        }
    }, [])
    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        dolla
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={1000} spy={true} exact='true' offset={-80} activeClass="active">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover" smooth={true} duration={1000} spy={true} exact='true' offset={-80}>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services" smooth={true} duration={1000} spy={true} exact='true' offset={-80}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup" smooth={true} duration={1000} spy={true} exact='true' offset={-80}>Sign up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
