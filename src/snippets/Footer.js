import React from "react";
import { Link } from "react-router-dom";

import { LogoGithub, LogoInstagram, LogoLinkedin, ArrowForward, LogoTwitter} from 'react-ionicons';

export default function Footer() {
    return (
        <footer>
            <div className="container center-text">
                <div className="row">
                    <div className="column large-3 medium-12"></div>
                    <div className="column large-6 medium-12">
                        <div className="large-text-tx">
                            Let's work together.
                        </div>
                        <br />
                        <p>I'm available for freelance or deep web</p>
                        <br /><br />
                        <Link className="button" to="/contact">Say Hello <ArrowForward color="#ffffff" /></Link>
                    </div>
                    <div className="column large-3"></div>
                </div>
            </div>
            <div className="footer-bottom flex">
                <div className="cpr">&copy; EMCEE BLACC 2022.</div>
                <a href="https://facebook.com">
                    <LogoInstagram color="#ffffff" />
                </a>
                <a href="https://facebook.com">
                    <LogoGithub color="#ffffff" />
                </a>
                <a href="https://facebook.com">
                    <LogoTwitter color="#ffffff" />
                </a>
                <a href="https://facebook.com">
                    <LogoLinkedin color="#ffffff" />
                </a>
            </div>
        </footer>
    )
}