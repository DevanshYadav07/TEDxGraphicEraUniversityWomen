import React, { useEffect } from "react";
import evolveEvolve from "../assets/evolveEvolve.svg";
import teaserTitle from "../assets/teaserTiltle.svg";
import ReactPlayer from "react-player";
import AOS from "aos";
import "aos/dist/aos.css";

const Teaser = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <div className="container">
                <div className="row n-evolve">
                    <div
                        className="col-md-6 centerAl"
                        data-aos="fade-right"
                        data-aos-duration="1100"
                    >
                        <img
                            className="img-fluid"
                            src={teaserTitle}
                            alt="title"
                        />
                    </div>
                    <div
                        className="col-md-6"
                        data-aos="fade-up"
                        data-aos-duration="1100"
                    >
                        <img src={evolveEvolve} alt="" className="img-fluid" />
                    </div>
                </div>
                <div
                    className="row"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    <div className="center player">
                        <ReactPlayer
                            controls 
                            url="https://www.youtube.com/watch?v=AmVaoe3jxnk"
                            width="100vw"
                            height="50vw"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teaser;
