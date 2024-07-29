import React, { useEffect } from "react";
import aboutEvent from "../assets/aboutEvent.svg";
import about from "../assets/about.svg";
import AOS from "aos";
import "aos/dist/aos.css";
  


// fja
const About = (props) => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <div className="bg-uni">
                <div className="container spacer2 bg-uni-inner" ref={props.refe}>
                    <div className="row">
                        <div
                            className="col-8"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            <img
                                src={about}
                                alt=""
                                className="img-fluid spacer2"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="col-md-8 text-col spacer"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            Located at the foothills of Himalyas, Graphic Era
                            University is the culmination of the hard work of
                            its visionary founder, Prof. (Dr.) Kamal Ghanshala,
                            who had the dream to change the destiny of thousands
                            of youth through quality and holistic education. The
                            premier university has acquired transnational
                            dimensions through student exchange and
                            knowledge-sharing programs with many foreign
                            universities and has been acclaimed and honoured at
                            international forums for its brilliance in upholding
                            the highest standards of education.
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
            <div className="spacer2">
                <div className="container bg-blossom">
                    <div className="row">
                        <div
                            className="col-8 spacer"
                            data-aos="fade-up"
                            data-aos-duration="700"
                        >
                            <img
                                src={aboutEvent}
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="col-md-8 text-col"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            Graphic Era is elated to present another inspiring
                            TEDx Event. A parochial gathering where live
                            TED-like talks and performances are shared. A
                            complete package of talks, demonstrations, opinions
                            and matters that are totally unbiased of any
                            commercial, religious and political views. TEDxWomen
                            aspires to support women and inspire lives by their
                            electrifying stories. It is a platform, to hear the
                            unheard, unseen, untold tales and get empowered.
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                    <div className="row">
                        <div
                            className="col-lg-8 text-col spacer italic"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            “A complete platter where one gets to taste
                            different flavours from every walks of life.”
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
