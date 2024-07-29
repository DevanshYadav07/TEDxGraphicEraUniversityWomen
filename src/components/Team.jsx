import React from "react";
import tedxLogo from "../assets/tedxLogo.svg";
import { Link } from "react-router-dom";
import team from "../assets/Team/team.svg";
import Organizers from "../components/Teams/Organisers";
import Curations from "../components/Teams/Curations";
import OLHR from "../components/Teams/OLHR";
import Technical from "../components/Teams/Technical";
import Design from "../components/Teams/Design";
import Editorial from "../components/Teams/Editorial";
import Social from "../components/Teams/Social";
import Production from "../components/Teams/Production";
import PostProduction from "../components/Teams/PostProduction";
import Footer from "../components/Footer";

const Team = () => {
    return (
        <div>
            <div className="container">
                <div className="row centerAl">
                    <div className="col-md-6 nav-space">
                        <div className="img-width">
                            <img
                                className="img-fluid"
                                src={tedxLogo}
                                alt="Tedx"
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <ul id="navbarcontent">
                            <li>
                                <Link to="/">
                                    <div className="nav-cont">About</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <div className="nav-cont">Speakers</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <div className="nav-cont">Tickets</div>
                                </Link>
                            </li>
                            <li>
                                <div className="nav-cont">Team</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row c-img">
                    <div className="t-img">
                        <img src={team} alt="" className="img-fluid spacer2" />
                    </div>
                </div>
                <div className="row center">
                    <div className="col-11 team-text">
                        A harmonious collaboration steering towards a common
                        goal, that’s how we define our incredible team. Bound
                        together by a single cause of sharing ideas worth
                        spreading, we’re the trailblazers holding the fort for
                        this newfound journey. Meet our ingenious, passionate
                        and zealous team.
                    </div>
                </div>
            </div>
            <Organizers />
            <Technical />
            <Curations />
            <Social />
            <OLHR />
            <Design />
            <Editorial />
            <Production />
            <PostProduction />
            <Footer />
        </div>
    );
};

export default Team;
