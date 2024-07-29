import React from 'react'
import Amandeep from "../../assets/Team/PostProduction/Amandeep.svg";
import Shaleen from "../../assets/Team/PostProduction/Shaleen.svg";

const PostProduction = () => {
  return (
    <div>
      <h1 className="center t-red spacer2">Post Production</h1>
      <div className="container justify-content-md-center">
        <div className="row">
          <div className="col-md-6 spacer2">
          <a
                            href="https://www.linkedin.com/in/amandeep-singh-89463222a/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
            <div className="row center">
              <img src={Amandeep} alt="" className="team-img" />
            </div>
            <div className="row t-col center">Amandeep Singh</div>
          </div>
          </a>
          </div>
          <div className="col-md-6 spacer2">
          <a
                            href="https://www.linkedin.com/in/shaleen-kapoor-3a61441b1"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
            <div className="row center">
              <img src={Shaleen} alt="" className="team-img" />
            </div>
            <div className="row t-col center">Shaleen Kapoor </div>
            
          </div>
          </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostProduction
