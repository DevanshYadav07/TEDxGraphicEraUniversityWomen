import React from "react";
import Sharishma from "../../assets/Team/Organisers/Sharishma.svg";
import Riya from "../../assets/Team/Organisers/RiyaSharma.svg";
import Diksha from "../../assets/Team/Organisers/Diksha.svg";
import Gaurangi from "../../assets/Team/Organisers/Gaurangi.svg";
import Anushka from "../../assets/Team/Organisers/AnushkaRawat.svg";
import Shreya from "../../assets/Team/Organisers/ShreyaAgarwal.svg";
import Advisors from "../Teams/Advisors";

const Organisers = () => {
    return (
        <div>
            <h1 className="center t-red spacer2">Organizers</h1>
            <div className="container justify-content-md-center">
                <div className="row">
                    <div className="col-md-6 spacer2">
                        <a
                            href="https://www.linkedin.com/in/sarishma-dangi-575172229/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                                <div className="row center">
                                    <img
                                        src={Sharishma}
                                        alt=""
                                        className="team-img"
                                    />
                                </div>
                                <div className="row t-col center">
                                    Ms. Sarishma Dangi
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-6 spacer2">
                        <a
                            href="https://www.linkedin.com/in/riya-sharma-b97b3b146/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                                <div className="row center">
                                    <img
                                        src={Riya}
                                        alt=""
                                        className="team-img"
                                    />
                                </div>
                                <div className="row t-col center">
                                    Ms. Riya Sharma
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <Advisors />
            <h1 className="center t-red spacer2">Co-Organizers</h1>
            <div className="container justify-content-md-center">
                <div className="row">
                    <div className="col-lg-3 spacer2">
                        <a
                            href="https://www.linkedin.com/in/diksha-bisht-7236411b7/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                                <div className="row center">
                                    <img
                                        src={Diksha}
                                        alt=""
                                        className="team-img"
                                    />
                                </div>
                                <div className="row t-col center">
                                    Diksha Bisht
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 spacer2">
                        <a
                            href="https://www.linkedin.com/in/gaurangi-tripathi-86a293211/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                                <div className="row center">
                                    <img
                                        src={Gaurangi}
                                        alt=""
                                        className="team-img"
                                    />
                                </div>
                                <div className="row t-col center">
                                    Gaurangi Tripathi
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-lg-3 spacer2">
                        <a
                            href="https://www.linkedin.com/in/anushka-rawat"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                                <div className="row center">
                                    <img
                                        src={Anushka}
                                        alt=""
                                        className="team-img"
                                    />
                                </div>
                                <div className="row t-col center">
                                    Anushka Rawat
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 spacer2">
                        <a
                            href="https://www.linkedin.com/in/shreya-agrawal-a98733221"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                                <div className="row center">
                                    <img
                                        src={Shreya}
                                        alt=""
                                        className="team-img"
                                    />
                                </div>
                                <div className="row t-col center">
                                    Shreya Agrawal
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Organisers;
