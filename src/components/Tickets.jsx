import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ticketHead from "../assets/ticketHead.svg";
import phone from "../assets/phone.svg";
import Price from "../assets/Ticket_price.svg";

const Tickets = (props) => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <div className="bg-tickets ng-tickets" ref={props.refe}>
                <div className="container bg-tickets-inner">
                    <div className="row">
                        <div
                            className="col-md-6"
                            data-aos="fade-right"
                            data-aos-duration="1500"
                        >
                            <img
                                src={ticketHead}
                                alt=""
                                className="img-fluid spacer2"
                            />
                        </div>
                    </div>
                    <div className="row rev">
                        <div
                            className="col-lg-5 center"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <img
                                src={phone}
                                alt=""
                                className="avatar img-fluid"
                            />
                        </div>
                        <div
                            className="col-lg-7 center"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div className="col-lg-10">
                                <div className="row ticket-text ticket-bg spacer2 ticket-margin center">
                                    <div className="row center ">
                                        <img
                                            src={Price}
                                            alt=""
                                            className="img-price"
                                        />
                                    </div>
                                    <div className="row center">
                                        “First come, First serve”, so don’t miss
                                        out
                                    </div>
                                </div>
                                <div className="row ticket-text ticket-bg spacer2 center ticket-margin ">
                                    <div className="row t-font">INCLUDES</div>

                                    <div className="row ">
                                        <ul className="">
                                            <li>
                                                Access to
                                                TEDxGraphicEraUniversityWomen
                                            </li>
                                            <li>Exciting goodies and gifts</li>
                                            <li>Lunch and refreshments</li>
                                        </ul>
                                    </div>

                                    <div className="row center">
                                        <button className="button-5">
                                            Booking Closed!
                                        </button>
                                    </div>
                                </div>
                                <div className="row ticket-text ticket-bg spacer2 center ticket-margin">
                                    <div className="row t-font">
                                        Non-Graphians
                                    </div>
                                    <div className="row">
                                        Contact Shivam Gupta (9992341198) via
                                        WhatsApp for booking and payment related
                                        queries.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tickets;
