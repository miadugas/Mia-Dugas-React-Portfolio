import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-code" ></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Mia Dugas Designs</h1>
        <p>
        A Denver Colorado based Full-Stack Web Developer <br />
      & UI/UX specialist with an obsessive attention to detail.{' '}
      
        </p>
        
      </div>
    </div>
    <nav>
      <ul>
        {/* <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Home
          </button>
        </li> */}
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('tech')
            }}
          >
            Technologies
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('port')
            }}
          >
            My Portfolio
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            My Resume
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About Me
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact Me
          </button>
        </li>
      </ul>
    </nav>
    <ul className="icons">
            <li>
              <a href="https://www.linkedin.com/in/miadugas/" className="icon fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/miadugas"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/codechickmia"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/miadugasdesigns" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            
          </ul>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header