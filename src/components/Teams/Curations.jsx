import React from "react";
import Arnav from "../../assets/Team/Curation/Arnav.svg";
import Taha from "../../assets/Team/Curation/TahaAli.svg";
import Palak from "../../assets/Team/Curation/Palak.svg";
const Curations = () => {
    return (
        <div>
            <h1 className="t-red center spacer2">Curation Team</h1>
            <div className="container justify-content-md-center">
                <div className="container justify-content-md-center">
                <div className="row">
                    <div className="col-md-4 spacer2">
                    <a
                            href="https://www.linkedin.com/in/arnav-garg-17256517b/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                        <div className="row center">
                            <img src={Arnav} alt="" className="team-img" />
                        </div>
                        <div className="row t-col center">Arnav Garg</div>
                        <div className="row t-red center">Lead</div>
                    </div>
                    </a>
                    </div>
                    <div className="col-md-4 spacer2">
                    <a
                            href="https://www.linkedin.com/in/taha-ali-632b4420b"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                        <div className="row center">
                            <img src={Taha} alt="" className="team-img" />
                        </div>
                        <div className="row t-col center">Taha Ali</div>
                    </div>
                    </a>
                    </div>
                    <div className="col-md-4 spacer2">
                    <a
                            href="https://www.linkedin.com/in/palak-aggarwal-186857238"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                        <div className="row center">
                            <img src={Palak} alt="" className="team-img" />
                        </div>
                        <div className="row t-col center">Palak Aggarwal</div>
                    </div>
                    </a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Curations;
