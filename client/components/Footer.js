import React from "react"

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div class="social-list">
          <div class="copyright">
            <p class="author">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Powered by <a href="#">A.R.I.S Project</a>
            </p>
          </div>
          <ul>
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer
