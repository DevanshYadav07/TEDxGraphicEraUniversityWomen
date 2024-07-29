import React from "react";
import Shivang from "../../assets/Team/Creative/Shivang.svg";
import Anushka from "../../assets/Team/Creative/AnushkaDashma.svg";

const Creative = () => {
  return (
    <div>
      <h1 className="center t-red spacer2">Creative Team </h1>
      <div className="container justify-content-md-center">
        <div className="row">
          <div className="col-md-6 spacer2">
            <div className="row center">
              <img src={Shivang} alt="" className="team-img" />
            </div>
            <div className="row t-col center">Shivang Yadav</div>
          </div>
          <div className="col-md-6 spacer2">
            <div className="row center">
              <img src={Anushka} alt="" className="team-img" />
            </div>
            <div className="row t-col center">Anushka Dhasmana</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creative;
