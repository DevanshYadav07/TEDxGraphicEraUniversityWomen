import React from "react";
import Dhruv from "../../assets/Team/OperLogHr/DhruvJaiswal.svg";
import Priyank from "../../assets/Team/OperLogHr/PriyankGupta.svg";
import Prachi from "../../assets/Team/OperLogHr/PrachiPandey.svg";
const OLHR = () => {
    return (
        <div>
            <div className="container justify-content-md-center">
                <div className="row">
                    <h1 className="center t-red spacer2">Management</h1>
                </div>
                <div className="row">
                    <div className="col-lg-4 spacer2">
                    <a
                            href="https://www.linkedin.com/in/dhruv-jaiswal-555a541aa/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                        <div className="row center">
                            <img src={Dhruv} alt="" className="team-img" />
                        </div>
                        <div className="row t-col center">Dhruv Jaiswal</div>
                        <div className="row">
                            <div className="center t-red">Operations Lead</div>
                        </div>
                        </div>
                        </a>
                    </div>
                    <div className="col-lg-4 spacer2">
                    <a
                            href="https://www.linkedin.com/in/priyank-gupta-91121b192/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                        <div className="row center">
                            <img src={Priyank} alt="" className="team-img" />
                        </div>
                        <div className="row t-col center">Priyank Gupta</div>
                        <div className="row">
                            <div className="center t-red">Logistics Lead</div>
                        </div>
                        </div>
                        </a>
                    </div>
                    <div className="col-lg-4 spacer2">
                    <a
                            href="https://www.linkedin.com/in/priyanship"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                        <div className="row center">
                            <img src={Prachi} alt="" className="team-img" />
                        </div>
                        <div className="row t-col center">Priyanshi Pandey</div>
                        <div className="row">
                            <div className="center t-red">HR Manager</div>
                        </div>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
            {/* <h1 className="center t-red spacer2">Operations</h1>
            <div className="container justify-content-md-center">
                <div className="row">
                    <div className="col spacer2">
                        <div className="row center">
                            <img src={Dhruv} alt="" className="team-img" />
                        </div>
                        <div className="row t-col center">Dhruv Jaiswal</div>
                    </div>
                </div>
            </div>
            <h1 className="center t-red spacer2">Logistics</h1>
            <div className="container justify-content-md-center">
                <div className="row">
                    <div className="col spacer2">
                        <div className="row center">
                            <img src={Priyank} alt="" className="team-img" />
                        </div>
                        <div className="row t-col center">Priyank Gupta</div>
                    </div>
                </div>
            </div>
            <h1 className="center t-red spacer2">HR Manager</h1>
            <div className="container justify-content-md-center">
                <div className="row">
                    <div className="col spacer2">
                        <div className="row center">
                            <img src={Prachi} alt="" className="team-img" />
                        </div>
                        <div className="row t-col center">Priyanshi Pandey</div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default OLHR;
