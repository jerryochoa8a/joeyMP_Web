import React from 'react';
import Container from 'react-bootstrap/Container';
import logo from '../images/Logo.png';
import Styles from './Navagation.module.css';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
// import { FaShoppingCart } from "react-icons/fa";

function Navagation() {
    return (
        <Navbar className={Styles.NavBar} fixed="top">
            <Container fluid className={Styles.navContainer}>

                {/* Centered Logo */}
                <Navbar.Brand href="/" className={Styles.logoContainer}>
                    <img
                        className={Styles.logo}
                        src={logo}
                        alt="Company Logo"
                    />
                </Navbar.Brand>

                {/* ////Cart//// */}
                {/* <div className={Styles.cartContainer}>
                    <a href="/cart" className={Styles.cartLink}>
                        <FaShoppingCart className={Styles.cartIcon} />
                        <span className={Styles.cartCount}>5</span>
                    </a>
                </div> */}

            </Container>
        </Navbar>
    );
}

export default Navagation;