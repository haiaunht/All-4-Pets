import React from "react"

const About = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="max-width-800">
          <h3>Who We Are</h3>
          <p>
            Here at A.R.I.S. we wish that no animal endure the pain and suffering of a life of
            abandonment and neglect. As human stewards of this earth, the team work to support and
            preserve the precious life on this planet and strive to create a humane living
            environment for all animals. Join us in fulfilling this vision!
          </p>
        </div>
        <div className="team-box">
          <div className="member">
            <div className="member-img">
              <img src={"./images/Hai-au.jpg"} alt="Hai-Au Bui" />
            </div>
            <div className="member-details">
              <div>
                <h2>
                  Hai-Au Bui
                  <br />
                  <span>Pet Expert</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="member">
            <div className="member-img">
              <img src={"./images/Ryne.png"} alt="Ryne Rountree" />
            </div>
            <div className="member-details">
              <div>
                <h2>
                  Ryne Rountree
                  <br />
                  <span>Pet Expert</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="member">
            <div className="member-img">
              <img src={"./images/Isabel.png"} alt="Isabel Servin" />
            </div>
            <div className="member-details">
              <div>
                <h2>
                  Isabel Servin
                  <br />
                  <span>Pet Expert</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="member">
            <div className="member-img">
              <img src={"./images/sang.jpg"} alt="Sang Vo" />
            </div>
            <div className="member-details">
              <div>
                <h2>
                  Sang Vo
                  <br />
                  <span>Pet Expert</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
