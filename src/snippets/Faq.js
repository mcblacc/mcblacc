import React from "react";
import { ArrowForward } from "react-ionicons";

export default function Faq() {
    return (
        <section className="faq white-bx padd-ref">
            <div className="bg"></div>
            <div className="container">
                <div className="row">
                    <div className="column large-2 medium-12"></div>
                    <div className="column large-3 medium-12">
                        <p className="grey-tx">Q&As</p>
                        <div className="title-tx">FAQs</div>
                    </div>
                    <div className="column large-5 medium-12 mtt">
                        <div className="faq-container">
                            <div className="faq-box">
                                <p>What are the payment terms for a project?</p>
                            </div>
                            <div className="p grey-tx">
                                50% upfront and 50% after launch. However, this payment schedule can be adjusted. For international transfers, most of my clients use Remit.
                            </div>
                        </div>
                        <div className="faq-container">
                            <div className="faq-box">
                                <p>Do you work internationally</p>
                            </div>
                            <div className="p grey-tx">
                                Yes. I'm based in Ghana and have clients in the US, Canada, England, Australia, New Zealand, Italy, France and Switzerland.
                            </div>
                        </div>
                        <div className="faq-container">
                            <div className="faq-box">
                                <p>How long does a project take?</p>
                            </div>
                            <div className="p grey-tx">
                                <p>This depends on the type of project. Some poject takes a day to complete whiles others can take a maximum of 1 month.</p>
                            </div>
                        </div>
                        <div className="faq-container">
                            <div className="faq-box">
                                <p>Why are your projects not displayed?</p>
                            </div>
                            <div className="p grey-tx">
                                <p>Due to the &nbsp;
                                    <a className="lxa" target="_blank" rel="noopener noreferrer" href="https://www.google.com/search?q=ncnd&rlz=1C1BNSD_enGH974GH974&sxsrf=ALiCzsZ8LCsc7eTl4buZE7RMDNdHaYnLRg%3A1655612943634&ei=D6auYvajJo-klwSWoriABQ&ved=0ahUKEwi254_r1rj4AhUP0oUKHRYRDlAQ4dUDCA4&uact=5&oq=ncnd&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzIECCMQJzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyCggAEIAEEIcCEBQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgAEEdKBAhBGABKBAhGGABQjQdYjQdgqwloAHACeACAAc0BiAHNAZIBAzItMZgBAKABAcgBCMABAQ&sclient=gws-wiz-serp">NCND Aggreement</a> 
                                    &nbsp;i have with most of my customers, none of my projects can be displayed on my website. <a href="mailto:emceeblacc@gmail.com" className="lxa">Email me <ArrowForward color="#ffffff" width="15px" /></a> for more insight.</p>
                            </div>
                        </div>
                    </div>
                    <div className="column large-2 medium-12"></div>
                </div>
            </div>
        </section>
    );
}