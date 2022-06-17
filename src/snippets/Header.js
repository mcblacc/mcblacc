import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from '../assets/images/logo.svg'

export default function Header() {
    var menuStateOpen = false;
    document.addEventListener('keypress', (e) => {
        if (e.key === '0' || e.key === 'm') {
            e.preventDefault();
            handleToggle(e);
        }
    });

    window.addEventListener('scroll', (e) => {
        const header = document.querySelector('header');
        if (window.scrollY === 0) {
            header.removeAttribute('style');
        } else {
            header.style = 'height: 2cm;';
        }
    })


    function handleToggle (e) {
        const menu = document.querySelector('div.large-menu');
        const menuLinks = document.querySelectorAll('div.menu-links ul li');
        const menuSocials = document.querySelectorAll('div.menu-socials ul li');
        const header = document.querySelector('header');
        if (menuStateOpen === false) {
            menuStateOpen = true;
            header.style.height = '2cm';
            document.querySelectorAll('div.menu').forEach((menu) => {
                menu.classList.add('focused');
            });;
            menu.style = 'display: block';
        } else { 
            menuStateOpen = false;
            header.removeAttribute('style');
            document.querySelectorAll('div.menu').forEach((menu) => {
                menu.classList.remove('focused');
            });;
            menuLinks.forEach((link) => {
                link.classList.add('animate__fadeOutDown');
            });
            menuSocials.forEach((social) => {
                social.classList.add('animate__fadeOutDown');
            });
            menu.classList.add('animate__fadeOut');

            setTimeout(() => {
                menuLinks.forEach((link) => {
                    link.classList.remove('animate__fadeOutDown');
                });
                menuSocials.forEach((social) => {
                    social.classList.remove('animate__fadeOutDown');
                });
                menu.classList.remove('animate__fadeOut');
                menu.style = 'display: none';
            }, 600);
        }
    }

    return (
        <div id="header-wrapper">
            <header>
                <nav className="hide-on-med-and-small">
                    <div className="column large-4">
                        <NavLink className="brand animate__animated animate__fadeInDown" to="/">
                            <img src={Logo} alt="No internet connection|Logo" />
                        </NavLink>
                    </div>
                    <div className="column large-8 flex space-between">
                        <div className="menu animate__animated animate__fadeInDown" onClick={handleToggle}></div>
                        <a className="button animate__animated animate__fadeInDown" href="mailto:emceeblacc@gmail.com">
                            Let's Talk Business
                        </a>
                    </div>
                </nav>
                <nav className="hide-on-large-flex">
                    <NavLink className="brand" to="/">
                        <img src={Logo} alt="No internet connection|Logo" />
                    </NavLink>
                    <div className="menu" onClick={handleToggle}></div>
                </nav>
            </header>
            <div className="large-menu animate__animated animate__fadeIn">
                <a className="abso-link animate__animated animate__flash" href="mailto:emceeblacc@gmail.com">Get in Touch</a>
                <div className="container full-height">
                    <div className="row full-height">
                        <div className="column large-4 hide-on-med-and-small full-height">
                            <div className="menu-socials flex align-end">
                                <ul>
                                    <li className="animate__animated animate__fadeInUp"><a href="https://facebook.com">Facebook</a></li>
                                    <li className="animate__animated animate__fadeInUp"><a href="https://behance.net">Behance</a></li>
                                    <li className="animate__animated animate__fadeInUp"><a href="https://linkedin.com/">Linkedin</a></li>
                                    <li className="animate__animated animate__fadeInUp"><a href="https://instagram.com/">Instagram</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="column large-4 medium-8">
                            <div className="menu-links flex align-end">
                                <ul>
                                    <li className="animate__animated animate__fadeInUp"><Link to="/">Home</Link></li>
                                    <li className="animate__animated animate__fadeInUp"><Link to="/about">About</Link></li>
                                    <li className="animate__animated animate__fadeInUp"><Link to="/contact">Contact</Link></li>
                                    <li className="animate__animated animate__fadeInUp"><Link to="/services">Services</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}