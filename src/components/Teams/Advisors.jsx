import React from "react";
import Harsh from "../../assets/Team/Advisor/HarshVardhanRawat.svg";
import Shivam from "../../assets/Team/Advisor/Shivam.svg";

const Advisors = () => {
    return (
        <div>
            <h1 className="center t-red spacer2">Advisors</h1>
            <div className="container justify-content-md-center">
                <div className="row">
                    <div className="col-md-6 spacer2">
                    <a
                            href="https://www.linkedin.com/in/harsh-vardhan-singh-rawat-7a8679196/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                        <div className="row center">
                            <img src={Harsh} alt="" className="team-img" />
                        </div>
                        <div className="row t-col center">
                            Harsh Vardhan S. Rawat
                        </div>
                        </div>
                        </a>
                    </div>
                    <div className="col-md-6 spacer2">
                    <a
                            href="https://www.linkedin.com/in/heyshivam"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                        <div className="row center">
                            <img src={Shivam} alt="" className="team-img" />
                        </div>
                        <div className="row t-col center">Shivam Gupta</div>
                    </div>        
                    </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advisors;
