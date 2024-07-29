import React from "react";
import footerImg from "../assets/footerImg.svg";
import call from "../assets/call.svg";
import location from "../assets/location.svg";
import mail from "../assets/mail.svg";
import insta from "../assets/insta.svg";
import twitter from "../assets/twitter.svg";
import linkedIn from "../assets/linkedIn.svg";

const Footer = () => {
    return (
        <div>
            <div className="bg-foot">
                <div className="container footer">
                    <div className="row">
                        <div className="col-6">
                            <img src={footerImg} alt="" className="img-fluid spacer2" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="container col-11">
                            <div className="row">
                                <div className="row text-col touch">
                                    Get In Touch
                                </div>
                                <div className="row">
                                    <div className="col-2 centering">
                                        <img
                                            src={mail}
                                            alt=""
                                            className="icon-m"
                                        />
                                    </div>
                                    <div className="col-8 text-col-f centerAl">
                                        tedxgraphicera@gmail.com
                                    </div>
                                    <div className="col-2 centering">
                                        <a
                                            href="https://instagram.com/tedxgraphicerauniversity?igshid=YmMyMTA2M2Y="
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                src={insta}
                                                alt=""
                                                className="icon"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-2 centering">
                                        <img
                                            src={call}
                                            alt=""
                                            className="icon"
                                        />
                                    </div>
                                    <div className="col-8 text-col-f centerAl">
                                        +91 99923 41198, +91 63972 32910
                                    </div>
                                    <div className="col-2 centering">
                                        <a
                                            href="https://twitter.com/TEDxGraphicEra?t=mKfuiy_O6G-y4x46RscofA&s=09"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                src={twitter}
                                                alt=""
                                                className="icon"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-2 centering">
                                        <img
                                            src={location}
                                            alt=""
                                            className="icon"
                                        />
                                    </div>
                                    <div className="col-8 text-col-f centerAl">
                                        Dehradun, India
                                    </div>
                                    <div className="col-2 centering">
                                        <a
                                            href="https://www.linkedin.com/company/tedxgraphicerauniversity/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                src={linkedIn}
                                                alt=""
                                                className="icon"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="row centering foot-text text-col-f">
                                    This independent TEDx event is operated
                                    under license from TED. Copyright Graphic
                                    Era University, 2022.<br></br>
                                    Designed and Developed by Technical Team of
                                    TedxGraphicEraUniversityWomen.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
