import React from "react";
import Ujjwal from "../../assets/Team/Technical/UjjwalChauhan.svg";
import Aman from "../../assets/Team/Technical/MdAmanullah.svg";
import Devansh from "../../assets/Team/Technical/Devanshyadav.svg";
import Tejus from "../../assets/Team/Technical/TejusJuyal.svg";
import UpendraTripathi from "../../assets/Team/Technical/UpendraTripathi.svg";

const Technical = () => {
    return (
        <div>
            <h1 className="center t-red spacer2">Technical Team</h1>
            <div className="container justify-content-md-center">
                <div className="row">
                    <div className="col-md-4 spacer2">
                    <a
                            href="https://www.linkedin.com/in/ujjwalchauhan/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                        <div className="row center">
                            <img src={Ujjwal} alt="" className="team-img" />
                        </div>
                        <div className="row t-col center">Ujjwal Chauhan</div>
                        <div className="row t-red center">Lead</div>
                    </div>
                    </a>
                    </div>
                    <div className="col-md-4 spacer2">
                    <a
                            href="https://www.linkedin.com/in/md-amanullah-6ba173219"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                        <div className="row center">
                            <img src={Aman} alt="" className="team-img" />
                        </div>
                        <div className="row t-col center">MD Amanullah</div>
                    </div>
                    </a>
                    </div>
                    <div className="col-md-4 spacer2">
                    <a
                            href="https://www.linkedin.com/in/devansh-yadav-311808217/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                        <div className="row center">
                            <img src={Devansh} alt="" className="team-img" />
                        </div>
                        <div className="row t-col center">Devansh Yadav</div>
                    </div>
                    </a>
                    </div>
                </div>
            </div>
            <div className="container justify-content-md-center">
                <div className="row">
                    <div className="col-md-6 spacer2">
                    <a
                            href="https://www.linkedin.com/in/upendratripathi9"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>  
                        <div className="row center">
                            <img
                                src={UpendraTripathi}
                                alt=""
                                className="team-img"
                            />
                        </div>
                        <div className="row t-col center">Upendra Tripathi</div>
                    </div>
                    </a>
                    </div>
                    <div className="col-md-6 spacer2">
                    <a
                            href="https://www.linkedin.com/in/tejus-juyal-b006871b2/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                        <div className="row center">
                            <img src={Tejus} alt="" className="team-img" />
                        </div>
                        <div className="row t-col center">Tejus Juyal</div>
                    </div>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technical;
