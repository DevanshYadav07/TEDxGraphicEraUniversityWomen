import React, { useEffect } from "react";
import WhatisGeu from "../assets/WhatisGeu.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const WhatIsTed = (props) => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <div className="container-fluid bg-faces">
                <div className="container mg bg-faces-inner" ref={props.refe}>
                    <div className="row whatIs">
                        <div
                            className="col-8 nmg"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <img src={WhatisGeu} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="row pd">
                        <div className="col-md-6 space-glass">
                            <div className="center">
                                <div
                                    className="glass-effect col-white t-left "
                                    data-aos="fade-up"
                                    data-aos-duration="500"
                                >
                                    “Tell your story. Shout it, Write it.
                                    Whisper it, if you have to. But tell it.
                                    Some won’t understand it. Some will outright
                                    reject it. But many will thank you for it.
                                    And then the most magical thing will happen
                                    one by one. Voices will start whispering,
                                    ‘Me, too.’and your tribe will gather and you
                                    will never feel alone again.” - L.R. Knost
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="center">
                                <div
                                    className="glass-effect col-white t-right"
                                    data-aos="fade-up"
                                    data-aos-duration="1500"
                                >
                                    TEDxGraphicEraUniversityWomen is recognition
                                    of commiserative women, to share their
                                    revolutionary ideas that are worth sharing
                                    and nurture young minds to evolve themselves
                                    into who they are intended to be. We are
                                    heading to provide one platform for everyone
                                    from different walks of life to inculcate
                                    the spirits of an inclusive society.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatIsTed;
