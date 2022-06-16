import React from "react";

export default function Jumbo() {
    return (
        <section className="jumbo">
            <div className="jumbo-center">
                <div className="large-text">
                    emcee<sup>mc.</sup> <span>blacc.</span>
                </div>
            </div>
            <div className="jumbo-bottom flex full-height align-end">
                <div className="container">
                    <div className="row center-align">
                        <div className="column large-4 hide-on-med-and-small">
                            <p className="grey-tx bold-tx">Devops Engineer</p>
                        </div>
                        <div className="column large-5 hide-on-med-and-small">
                            <a href="#jref" className="large-circle-button">
                                Scroll
                            </a>
                        </div>
                        <div className="column large-3 medium-12">
                            <p className="grey-tx bold-tx white-tx center-med">
                                I am an independent developer in NG currently working on freelance and deep web pojects.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}