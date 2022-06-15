import React from "react";
import Logo from '../assets/images/logo.svg'

export default function Header() {
    var menuStateOpen = false;
    function handleToggle (e) {
        const menu = document.querySelector('div.large-menu');
        const menuLinks = document.querySelectorAll('div.menu-links ul li');
        const menuSocials = document.querySelectorAll('div.menu-socials ul li');
        if (menuStateOpen === false) {
            menuStateOpen = true;
            e.target.classList.add('focused');
            menu.style = 'display: block';
        } else { 
            menuStateOpen = false;
            e.target.classList.remove('focused');
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
            }, 800);
        }
    }

    return (
        <div id="header-wrapper">
            <header>
                <nav className="hide-on-med-and-small">
                    <div className="column large-4">
                        <a className="brand" href="link">
                            <img src={Logo} alt="No internet connection|Logo" />
                        </a>
                    </div>
                    <div className="column large-8 flex space-between">
                        <div className="menu" onClick={handleToggle}></div>
                        <a className="button" href="bu">
                            Start a Project
                        </a>
                    </div>
                </nav>
                <nav className="hide-on-large-flex">
                    <a className="brand" href="link">
                        <img src={Logo} alt="No internet connection|Logo" />
                    </a>
                    <div className="menu" onClick={handleToggle}></div>
                </nav>
            </header>
            <div className="large-menu animate__animated animate__fadeIn">
                <a className="abso-link animate__animated animate__flash">Get in Touch</a>
                <div className="container full-height">
                    <div className="row full-height">
                        <div className="column large-4 hide-on-med-and-small full-height">
                            <div className="menu-socials flex align-end">
                                <ul>
                                    <li className="animate__animated animate__fadeInUp"><a href="">Facebook</a></li>
                                    <li className="animate__animated animate__fadeInUp"><a href="">Behance</a></li>
                                    <li className="animate__animated animate__fadeInUp"><a href="">Linkedin</a></li>
                                    <li className="animate__animated animate__fadeInUp"><a href="">Instagram</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="column large-4 medium-8">
                            <div className="menu-links flex align-end">
                                <ul>
                                    <li className="animate__animated animate__fadeInUp"><a href="">Home</a></li>
                                    <li className="animate__animated animate__fadeInUp"><a href="">About me</a></li>
                                    <li className="animate__animated animate__fadeInUp"><a href="">Portfolio</a></li>
                                    <li className="animate__animated animate__fadeInUp"><a href="">Services</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}