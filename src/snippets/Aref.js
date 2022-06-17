import React from "react";
import { ArrowForward } from "react-ionicons";
import { Link } from "react-router-dom";

export default function Aref() {
    return (
        <section className="padd-ref white-content" id="jref">
            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="column large-4 medium-12"></div>
                    <div className="column large-5 medium-12">
                        <p className="grey-tx bold-tx large-tx">
                            I'm Mark, a Software Engineer focused on building products and connections driven by empathy, people and technology.
                            <br /><br />
                            Get to know me better to see if I'm the right fit for your project!
                        </p>
                        <br />
                        <Link className="button" to="/about">About me <ArrowForward color="#ffffff" /></Link>
                        <br /><br /><br />
                        <p className="white-tx bold-tx large-tx">
                            As a Software Engineer with an eye for design and user experience, I craft quality software from front to back - every aspect considered. You can call me your Swiss Army Knife in terms of Software.
                        </p>
                        <br />
                    </div>
                    <div className="column large-3 medium-12"></div>
                </div>
            </div>
        </section>
    )
}