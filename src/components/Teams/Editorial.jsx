import React from "react";
import Sanjana from "../../assets/Team/Editorials/Sanjana.svg";
import Shaurya from "../../assets/Team/Editorials/Shaurya.svg";
import Saloni from "../../assets/Team/Editorials/Saloni.svg";
import Palak from "../../assets/Team/Editorials/Palak.svg";
import Kashish from "../../assets/Team/Editorials/Kashish.svg";
import Muskan from "../../assets/Team/Editorials/Muskan.svg";
import Nandini from "../../assets/Team/Editorials/Nandini.svg";
import Reetika from "../../assets/Team/Editorials/Reetika.svg";
const Editorial = () => {
    return (
        <div>
            <h1 className="center t-red spacer2">Editorial Team</h1>
            <div className="container justify-content-md-center">
                <div className="row">
                    <div className="col-md-4 spacer2">
                    <a
                            href="https://www.linkedin.com/in/sanjana-arora-5b5190213"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                        <div className="row center">
                            <img src={Sanjana} alt="" className="team-img" />
                        </div>
                        <div className="row t-col center">Sanjana Arora</div>
                        <div className="row t-red center">Lead</div>
                    </div>
                    </a>
                    </div>
                    <div className="col-md-4 spacer2">
                    <a
                            href="https://www.linkedin.com/in/shaurya-tomar-aa0200255"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                        <div className="row center">
                            <img src={Shaurya} alt="" className="team-img" />
                        </div>
                        <div className="row t-col center">Shaurya Tomar</div>
                    </div>
                    </a>
                    </div>
                    <div className="col-md-4 spacer2">
                    <a
                            href="https://www.linkedin.com/in/saloni-sharma-03758b21b"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                        <div className="row center">
                            <img src={Saloni} alt="" className="team-img" />
                        </div>
                        <div className="row t-col center">Saloni Sharma</div>
                    </div>
                    </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 spacer2">
                    <a
                            href="https://www.linkedin.com/in/kashish-jaffery"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                        <div className="row center">
                            <img src={Kashish} alt="" className="team-img" />
                        </div>
                        <div className="row t-col center">Kashish Jaffery</div>
                    </div>
                    </a>
                    </div>
                    <div className="col-md-4 spacer2">
                    <a
                            href="https://www.linkedin.com/in/aastha-verma-337125221"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                        <div className="row center">
                            <img src={Palak} alt="" className="team-img" />
                        </div>
                        <div className="row t-col center">Aastha Verma</div>
                    </div>
                    </a>
                    </div>
                    <div className="col-md-4 spacer2">
                    <a
                            href="https://www.linkedin.com/in/muskan-tomar-31231920a"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                        <div className="row center">
                            <img src={Muskan} alt="" className="team-img" />
                        </div>
                        <div className="row t-col center">Muskan Tomar</div>
                    </div>
                    </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 spacer2">
                    <a
                            href="https://www.linkedin.com/in/nandini-upadhyay-a4675a221"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                        <div className="row center">
                            <img src={Nandini} alt="" className="team-img" />
                        </div>
                        <div className="row t-col center">Nandini Upadhyay</div>
                    </div>
                    </a>
                    </div>
                    <div className="col-md-6 spacer2">
                    <a
                            href="https://www.linkedin.com/in/reetika-singh-b214071b6"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                        <div className="row center">
                            <img src={Reetika} alt="" className="team-img" />
                        </div>
                        <div className="row t-col center">Reetika Singh</div>
                    </div>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Editorial;
