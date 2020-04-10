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
        A Full-Stack Developer, Front-End Developer & Web Designer
      with an
      <h3> obsessive</h3> attention to detail.{' '}
      
        </p>
        
      </div>
    </div>
    <nav>
      <ul style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
        {/* <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Home
          </button>
        </li> */}
        <li >
          <button
            onClick={() => {
              props.onOpenArticle('tech')
            }} >
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
              <a href="https://www.linkedin.com/in/miadugas/" className="icon fa-linkedin" target="_blank" rel="noopener noreferrer">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/miadugas"
                className="icon fa-github" target="_blank" rel="noopener noreferrer"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/codechickmia"
                className="icon fa-twitter" target="_blank" rel="noopener noreferrer"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/miadugasdesigns" className="icon fa-facebook" target="_blank" rel="noopener noreferrer">
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
