import React, { useEffect } from "react";
import Anand from "../assets/Speakers/Anand.svg";
import Ashima from "../assets/Speakers/Ashima_bhel.svg";
// import Nivedita from "../assets/Speakers/Nivedita_kukreti.svg";
import AvantikaMohan from "../assets/Speakers/Avantika_mohan.svg";
import Meeta_gutgutlia from "../assets/Speakers/Meeta_gutgutlia.svg";
import Ruchi from "../assets/Speakers/Ruchi_bhadola.svg";
import Sandhya from "../assets/Speakers/Sandhya_gutreddy.svg";
import Vasudha from "../assets/Speakers/Vasudha_rai.svg";
import Dimple from "../assets/Speakers/Dr_Dimple_jangda.svg";
import Manik from "../assets/Speakers/Manik_kaur.svg";
// import Shabri from "../assets/Speakers/Shabri_prashad.svg";
import SandhyaMridul from "../assets/Speakers/Sandhya_Mridul.svg";
import Mohan_chinnapa from "../assets/Speakers/Mohan_chinnapa.svg";

import ourSpeakers from "../assets/ourSpeakers.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Speakers = (props) => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <div className="container" ref={props.refe}>
                <div className="row spacer">
                    <div
                        className="col-md-8"
                        data-aos="fade-down"
                        data-aos-duration="800"
                    >
                        <img src={ourSpeakers} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-4"></div>
                </div>
                <div
                    className="row spacer"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <div className="marquee">
                        <div className="marquee__group">
                            <div>
                                <img src={Anand} alt="" className="speaker" />
                            </div>
                            <div>
                                <img src={Ashima} alt="" className="speaker" />
                            </div>

                            <div>
                                <img
                                    src={AvantikaMohan}
                                    alt=""
                                    className="speaker"
                                />
                            </div>
                            {/* <div>
                <img src={Nivedita} alt="" className="speaker" />
              </div> */}
                            <div>
                                <img
                                    src={Meeta_gutgutlia}
                                    alt=""
                                    className="speaker"
                                />
                            </div>
                            <div>
                                <img src={Ruchi} alt="" className="speaker" />
                            </div>
                            <div>
                                <img src={Sandhya} alt="" className="speaker" />
                            </div>
                            <div>
                                <img src={Vasudha} alt="" className="speaker" />
                            </div>
                            <div>
                                <img src={Dimple} alt="" className="speaker" />
                            </div>

                            <div>
                                <img src={Manik} alt="" className="speaker" />
                            </div>
                            {/* <div>
                                <img src={Shabri} alt="" className="speaker ng-sp" />
                            </div> */}
                            <div>
                                <img
                                    src={SandhyaMridul}
                                    alt=""
                                    className="speaker"
                                />
                            </div>
                            <div>
                                <img
                                    src={Mohan_chinnapa}
                                    alt=""
                                    className="speaker"
                                />
                            </div>
                        </div>

                        <div aria-hidden="true" className="marquee__group">
                        <div>
                                <img src={Anand} alt="" className="speaker" />
                            </div>
                            <div>
                                <img src={Ashima} alt="" className="speaker" />
                            </div>

                            <div>
                                <img
                                    src={AvantikaMohan}
                                    alt=""
                                    className="speaker"
                                />
                            </div>
                            {/* <div>
                <img src={Nivedita} alt="" className="speaker" />
              </div> */}
                            <div>
                                <img
                                    src={Meeta_gutgutlia}
                                    alt=""
                                    className="speaker"
                                />
                            </div>
                            <div>
                                <img src={Ruchi} alt="" className="speaker" />
                            </div>
                            <div>
                                <img src={Sandhya} alt="" className="speaker" />
                            </div>
                            <div>
                                <img src={Vasudha} alt="" className="speaker" />
                            </div>
                            <div>
                                <img src={Dimple} alt="" className="speaker" />
                            </div>

                            <div>
                                <img src={Manik} alt="" className="speaker" />
                            </div>
                            {/* <div>
                                <img src={Shabri} alt="" className="speaker ng-sp" />
                            </div> */}
                            <div>
                                <img
                                    src={SandhyaMridul}
                                    alt=""
                                    className="speaker"
                                />
                            </div>
                            <div>
                                <img
                                    src={Mohan_chinnapa}
                                    alt=""
                                    className="speaker"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Speakers;
