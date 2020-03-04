import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Mia Dugas Designs <a href="#">Privacy Policy</a>. Built in React.js with Gatsby.js. 
        Some Rights Reserved. Made with <a className="icon fa-heart"></a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
