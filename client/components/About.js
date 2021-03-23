import React from "react"

const About = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="max-width-800">
          <h3>Who We Are</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum labore accusantium fuga
            quo soluta explicabo quae quas, consequatur ea ad voluptatem porro fugit eligendi
            cupiditate id ipsa, quam placeat deserunt.
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
