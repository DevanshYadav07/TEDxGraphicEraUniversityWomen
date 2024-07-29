import React, { useRef } from "react";
import WhatIsTed from "./WhatIsTed";
import About from "./About";
import Teaser from "./Teaser";
import Tickets from "./Tickets";
import Footer from "./Footer";
import Speakers from "./Speakers";
import evolve from "../assets/evolve.svg";
import tedxLogo from "../assets/tedxLogo.svg";
import { Link } from "react-router-dom";

const FrontPage = () => {
    const refHome = useRef(null);
    const refAbout = useRef(null);
    const refSpeakers = useRef(null);
    const refTickets = useRef(null);

    return (
        <div>
            <div className="container">
                <div className="row centerAl">
                    <div className="col-md-6 nav-space">
                        <div className="img-width">
                            <img
                                className="img-fluid"
                                src={tedxLogo}
                                alt="Tedx"
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <ul id="navbarcontent">
                            <li>
                                <div
                                    className="nav-cont"
                                    onClick={() => {
                                        refAbout.current.scrollIntoView();
                                    }}
                                >
                                    About
                                </div>
                            </li>
                            <li>
                                <div
                                    className="nav-cont"
                                    onClick={() => {
                                        refSpeakers.current.scrollIntoView();
                                    }}
                                >
                                    Speakers
                                </div>
                            </li>
                            <li>
                                <div
                                    className="nav-cont"
                                    onClick={() => {
                                        refTickets.current.scrollIntoView();
                                    }}
                                >
                                    Tickets
                                </div>
                            </li>
                            <li>
                                <Link to="/Team">
                                    <div className="nav-cont">Team</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="n-margin">
                    <img src={evolve} alt="" className="img-fluid" />
                </div>
            </div>
            <WhatIsTed refe={refHome} />
            <About refe={refAbout} />
            <Speakers refe={refSpeakers} />
            <Teaser />
            <Tickets refe={refTickets} />
            <Footer />
        </div>
    );
};

export default FrontPage;
