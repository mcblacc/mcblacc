import React, { useRef } from "react";

export default function Magic() {
    const ref = useRef();

    return (
        <section className="padd-ref white-content" id="jref">
            <div className="container">
                <div className="large-text">
                    Skills Stack
                </div>
                <br /><br /><br /><br />
                <div className="row">
                    <div className="column large-3"></div>
                    <div className="column large-3">
                        <div className="chip bold-tx large-tx">
                            Frontend technologies
                        </div>
                    </div>
                    <div className="column large-1"></div>
                    <div className="column large-4 flex center-align">
                        <div className="list grey-tx">
                            <div>Pure HTML, Css</div>
                            <div>Javascript</div>
                            <div>Next.js</div>
                            <div>Gatsby.js</div>
                            <div>Vue.js</div>
                            <div>React + Redux</div>
                        </div>
                    </div>
                    <div className="column large-1"></div>
                </div>
            </div>
        </section>
    );
}