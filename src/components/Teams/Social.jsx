import React from "react";
import Pranjal from "../../assets/Team/Social Media/Pranjal.svg";
import Anushka from "../../assets/Team/Social Media/AnushkaDashma.svg";
import Shivang from "../../assets/Team/Social Media/Shivang.svg";
const Social = () => {
    return (
        <div>
            <div>
                <h1 className="center t-red spacer2">Social Media Team</h1>
                <div className="container justify-content-md-center">
                    <div className="row">
                        <div className="col-md-4 spacer2">
                            <a
                                href="https://www.linkedin.com/in/pranjaltrivedi02/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div>
                                    <div className="row center">
                                        <img
                                            src={Pranjal}
                                            alt=""
                                            className="team-img"
                                        />
                                    </div>
                                    <div className="row t-col center">
                                        Pranjal Trivedi
                                    </div>
                                    <div className="row t-red center">Lead</div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 spacer2">
                            <a
                                href="https://www.linkedin.com/in/shivang-yadav-7b4a77220"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div>
                                    <div className="row center">
                                        <img
                                            src={Shivang}
                                            alt=""
                                            className="team-img"
                                        />
                                    </div>
                                    <div className="row t-col center">
                                        Shivang Yadav
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 spacer2">
                            <a
                                href="https://www.linkedin.com/in/anushka-dhasmana-09a200255"
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
                                        Anushka Dhasmana
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Social;
