import React from "react";
import Shivanshu from "../../assets/Team/DesignTeam/Shivanshu.svg";
import Siddhart from "../../assets/Team/DesignTeam/Siddhart.svg";
import Rahul from "../../assets/Team/DesignTeam/RahulRawat.svg";
import Anant from "../../assets/Team/DesignTeam/AnantP.svg";
import SuvojitMukerjee from "../../assets/Team/DesignTeam/SuvojitMukerjee.svg";
import AnantNarayan from "../../assets/Team/DesignTeam/AnantNarayan.svg";

const Design = () => {
    return (
        <div>
            <h1 className="center t-red spacer2">Design Team </h1>
            <div className="container justify-content-md-center">
                <div className="row">
                    <div className="col-md-4 spacer2">
                    <a
                            href="https://www.linkedin.com/in/shivyanshu-saini-857420233/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                        <div className="row center">
                            <img src={Shivanshu} alt="" className="team-img" />
                        </div>
                        <div className="row t-col center">Shivyanshu Saini</div>
                        <div className="row t-red center">Lead</div>
                    </div>
                    </a>
                    </div>
                    <div className="col-md-4 spacer2">
                    <a
                            href="https://drive.google.com/drive/folders/11RbhPkNnVDGHrn4daV32nk3XCSinq3yt"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                        <div className="row center">
                            <img src={Siddhart} alt="" className="team-img" />
                        </div>
                        <div className="row t-col center">
                            Siddharth Kataria
                        </div>
                        </div>
                        </a>
                    </div>
                    <div className="col-md-4 spacer2">
                    <a
                            href="https://www.linkedin.com/in/rahul-rawat-866526249"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                        <div className="row center">
                            <img src={Rahul} alt="" className="team-img" />
                        </div>
                        <div className="row t-col center">Rahul Rawat</div>
                    </div>
                    </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 spacer2">
                    <a
                            href="https://drive.google.com/file/d/1NAvkXcKPnwysPg9AG_qtn1Lkbzoi0Y03/view?usp=drivesdk"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                        <div className="row center">
                            <img src={Anant} alt="" className="team-img" />
                        </div>
                        <div className="row t-col center">Anmol Prakash Nigam</div>
                    </div>
                    </a>
                    </div>
                    <div className="col-md-4 spacer2">
                    <a
                            href="https://drive.google.com/drive/folders/1aAZruxToUfbL-rTwXfxHlWOMUWB_E2VP"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                        <div className="row center">
                            <img
                                src={SuvojitMukerjee}
                                alt=""
                                className="team-img"
                            />
                        </div>
                        <div className="row t-col center">
                            Suvojit Mukherjee
                        </div>
                        </div>
                        </a>
                    </div>
                    <div className="col-md-4 spacer2">
                    <a
                            href="https://www.linkedin.com/in/anant-narayan-060a78230"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                        <div className="row center">
                            <img
                                src={AnantNarayan}
                                alt=""
                                className="team-img"
                            />
                        </div>
                        <div className="row t-col center">Anant Narayan</div>
                    </div>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Design;
