import React from "react";

export default function Jumbo() {
    return (
        <section className="jumbo">
            <div className="jumbo-center animate__animated animate__fadeInUp" data-scroll-section>
                <div className="large-text" data-scroll data-scroll-speed="2" data-scroll-repeat>
                    emcee<sup>mc.</sup> <span>blacc.</span>
                </div>
            </div>
            <div className="jumbo-bottom flex full-height align-end">
                <div className="container">
                    <div className="row center-align">
                        <div className="column large-4 hide-on-med-and-small">
                            <p className="white-tx bold-tx animate__animated animate__fadeInUp">www Expert</p>
                        </div>
                        <div className="column large-5 hide-on-med-and-small">
                            <a href="#jref" data-content="Scroll" className="large-circle-button animate__animated animate__fadeInUp rotate">
                                Scroll
                            </a>
                        </div>
                        <div className="column large-3 medium-12">
                            <p className="grey-tx bold-tx white-tx center-med animate__animated animate__fadeInUp">
                                I am developer based in NG currently freelancing on devloping pojects.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}