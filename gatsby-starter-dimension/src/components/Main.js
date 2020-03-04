import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.jpg'
import pic05 from '../images/pic05.jpg'
import miasig from '../images/miasig.png'
import work01 from '../images/work01.png'
import work02 from '../images/work02.png'
// import mdres from '../images/mdres.pdf'
import work04 from '../images/work04.png'
import work05 from '../images/work05.png'
import work06 from '../images/work06.png'

import '../assets/scss/main.scss'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        {/* <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
          </p>
          {close}
        </article> */}

{/* Tech */}
<article
          id="tech"
          className={`${this.props.article === 'tech' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Technologies</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
          Proficiencies: HTML/HTML5, CSS/CSS3, JavaScript, React.js, React/Redux, React native, Angular CLI, Angular 8, jQuery, Handlebars, Node.js, Express.js, MySQL 8.0, Responsive Design, Heroku, Git, Bash, Visual Studio Code, Postman, Salesforce.com administration, Bootstrap CSS (v4.3), Bulma (v0.8), Zurb Foundation (v6), Skeleton Framework, Sequelize, CRUD, MongoDB, Webpack, PWA, AWS
          </p>
          <span className="image main">
            <img src={pic04} alt="" />
          </span>
          {close}
        </article>

{/* Portfolio */}
<article
          id="port"
          className={`${this.props.article === 'port' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Portfolio</h2>
          <span className="image main">
            <img src={pic05} alt="" />
          </span>
          <hr />
          <p>
            <h2 >React Employee Directory</h2>
  
            <h3>React.js, axios, express, lodash & Github Pages deployment</h3>
          <h3>16 Feb. 2020</h3>
          An employee directory with Reactjs. This project breaks up the application's UI into components, manage component state, and can respond to user events. This application allows an employee or manager to benefit greatly from being able to view non-sensitive data about other employees and allows for filtering of employees by first or last name.
          </p>

          <p>
          
          </p>
          <span className="image main">
            <img src={work04} alt="" />
          </span>
          <ul className="icons">
            <li>
              <a href="https://miadugas.github.io/React-Directory/" target="_blank" rel="noopener noreferrer" className="icon fa-sitemap">
                <span className="label">Live Site</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/miadugas/React-Directory" target="_blank" rel="noopener noreferrer"
                className="icon fa-github"
              >
                <span className="label">Github Repo</span>
              </a>
            </li>
            
          </ul>

{/* #2 */}
<hr />
<p>
          <h2 >Muze Messanger</h2>
  
          <h3>Real Time Chat Application</h3>
          <h3>React.js, Node.js, Express.js, SocketIO</h3>
          <h3>29 Feb. 2020</h3>
          JAM Stack application
          </p>
          {/* <p>
          <h3>KEY ACHIEVEMENTS:</h3>
          •	Responsible for internally focused activities supporting pricing, go-to-market plans and business processes for product offerings in compliance with The Gramm-Leach-Bliley Act (GLB).
          <br />
          <br />
          •	Met 6-month MRR and NRR goal of 30k for the company in the first 120 days.
          </p> */}
          <span className="image main">
            <img src={work06} alt="" />
          </span>
          <ul className="icons">
            <li>
              <a href="https://affectionate-shirley-f54a8b.netlify.com/" className="icon fa-sitemap" target="_blank" rel="noopener noreferrer">
                <span className="label">Live Site</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/miadugas/react-chat"
                className="icon fa-github" target="_blank" rel="noopener noreferrer"
              >
                <span className="label">Github Repo</span>
              </a>
            </li>
            
          </ul>

{/* #3 */}
<hr />
          <p>
        
          <h2 >New York Times Article Search</h2>
      
          <h3>HTML/CSS, jQuery, New York Times API, Javascript & Bootstrap Framework</h3>
          <h3>12 Oct. 2019</h3>
          An App built with HTML, CSS & JavaScript that demonstrates a Server Side API that incorporates text boxes capturing User Input, and returns via an AJAX call, user specified search parameters.
          </p>
          {/* <p>
          <h3>KEY ACHIEVEMENTS:</h3>
          • Expanded territory by 17% since hire date. In the first 5 months broke all previous sales records for region. Won Top performer of the Quarter twice in 2017.
          <br />
          • Cultivating sales opportunithrough inbound and external netwBuilding pipeline to exceed squotas and maintain consistent cloaverages. Gained extensive granknowledge of strategic marketcustomer acquisition and technologsales strategies.
          </p> */}
          <span className="image main">
            <img src={work05} alt="" />
          </span>
          <ul className="icons">
            <li>
              <a href="https://miadugas.github.io/NewYorkTimesAPI-Search/" className="icon fa-sitemap" target="_blank" rel="noopener noreferrer">
                <span className="label">Live Site</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/miadugas/NewYorkTimesAPI-Search"
                className="icon fa-github" target="_blank" rel="noopener noreferrer"
              >
                <span className="label">Github Repo</span>
              </a>
            </li>
            
          </ul>

{/* #4 */}
<hr />
          <p>
          
          <h2 >Weather Dashboard</h2>
      
          <h3>HTML/CSS, JavaScript, jQuery, Open Weather API & Bootstrap Framework</h3>
          <h3>13 Oct. 2019</h3>
          A weather dashboard using Openweather API to retrieve weather data for cities.  The dashboard displays the following current weather conditions: City, Date, Icon image (visual representation of weather conditions), Temperature, Humidity, Wind speed & UV index.  Includes a 5-Day Forecast below the current weather conditions. Displaying - Date, Icon image (visual representation of weather conditions), Temperature & Humidity
          </p>
          {/* <p>
          <h3>KEY ACHIEVEMENTS:</h3>
          •	Responsible for internally focused activities supporting pricing, go-to-market plans and business processes for product offerings in compliance with The Gramm-Leach-Bliley Act (GLB).
          <br />
        
          •	Met 6-month MRR and NRR goal of 30k for the company in the first 120 days.
          </p> */}
          <span className="image main">
            <img src={work02} alt="" />
          </span>
          <ul className="icons">
            <li>
              <a href="https://miadugas.github.io/Weather-Dashboard/" className="icon fa-sitemap" target="_blank" rel="noopener noreferrer">
                <span className="label">Live Site</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/miadugas/Weather-Dashboard"
                className="icon fa-github" target="_blank" rel="noopener noreferrer"
              >
                <span className="label">Github Repo</span>
              </a>
            </li>
            
          </ul>
{/*4*/}
{/* <hr />
<p>
        
          <h2 >BarTinder</h2>
        
          <h3>A collaboration</h3>
          <h3>HTML/CSS, Javascript & Bulma CSS Framework</h3>
          <h3>14 Oct. 2019</h3>
          Can’t decide what to drink? Let BarTinder suggest random cocktails, complete with recipe and a video tutorial from YouTube. Browse through new cocktails by photo, select the ones you like, watch a tutorial, and enjoy. Frontend: Mia Dugas
          </p>
          <p>
          <h3>KEY ACHIEVEMENTS:</h3>

          </p>
          <span className="image main">
            <img src={pic04} alt="" />
          </span>
          <ul className="icons">
            <li>
              <a href="https://miadugas.github.io/BarTinder/" target="_blank"  className="icon fa-sitemap">
                <span className="label">Live Site</span>
              </a>
            </li>
            <li>
              <a
                href="https://miadugas.github.io/BarTinder/"
                className="icon fa-github"
              >
                <span className="label">Github Repo</span>
              </a>
            </li>
            
          </ul> */}
{/* #5 */}

<hr /> 
<p>
          <h2 >Pigeonhole</h2>
      
          <h3>Music Cataloging App - A collaboration</h3>
          <h3>Spotify API, Javascript, MySQL & Foundation Framework</h3>
          <h3>11 Jan. 2020</h3>
          Music Organization for Music Lovers:  40,000 ... That's the number of new songs uploaded to Spotify every day. Thats a lot of music to listen to. Add an album and fall into the  Pigeonhole  Where YOU rank, YOU write notes & analyze what YOU love about an album and let our algorithm do the rest.  Our app was built on Zurb Foundation, deployed to Heroku and uses the Spotify API, mySQL database, and Sequelize to organize YOUR music preferences. Frontend - Mia Dugas
          </p>
          {/* <p>
          <h3>KEY ACHIEVEMENTS:</h3>
          •	Responsible for internally focused activities supporting pricing, go-to-market plans and business processes for product offerings in compliance with The Gramm-Leach-Bliley Act (GLB).
          <br />
          <br />
          •	Met 6-month MRR and NRR goal of 30k for the company in the first 120 days.
          </p> */}
          <span className="image main">
            <img src={work01} alt="" />
          </span>
          <ul className="icons">
            <li>
              <a href="https://pigeonhole-music.herokuapp.com/" className="icon fa-sitemap" target="_blank" rel="noopener noreferrer">
                <span className="label">Live Site</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/miadugas/Pigeonhole"
                className="icon fa-github" target="_blank" rel="noopener noreferrer"
              >
                <span className="label">Github Repo</span>
              </a>
            </li>
            
          </ul>

          {close}
        </article>




        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Resume </h2>
          
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <h2 className="major">WORK</h2>
          <p>
            <h2>Mia Dugas Designs</h2>
            <h3>Freelance Developer</h3>
          <h3>December 2018 - Current</h3>
          Writing well designed, testable, efficient code by using best software development practices. designing, coding, and modifying existing websites from layout to function and according to a client's specifications. Striving to create clean visually appealing layout/user interfaces that feature user-friendly design and clear navigation. Integrating data from various back-end services and databases and deploying quality projects for a diverse clientele.
          </p>
          <p>
          Currently working with:
          • Residential mortgage finance and secondary market securitization technologies. Consultant for Financial Technology solutions. 
          </p>

          <p>
          <h2>Quicken Loans Mortgage Services Inc.</h2>
          <h3>Sr. Account Executive - Correspondent and Wholesale Lending</h3>
          <h3>March 2017 - December 2018</h3>
          Representative for CO & NM region. Devised innovative sales strategies and account action plans to ensure success in building new business. Gained extensive granular knowledge of strategic trigger marketing, customer acquisition and technological sales strategies.
          </p>
          <p>
          <h3>KEY ACHIEVEMENTS:</h3>
          • Expanded territory by 17% since hire date. In the first 5 months broke all previous sales records for region. Won Top performer of the Quarter twice in 2017.
          <br />
          <br />
          • Cultivating sales opportunithrough inbound and external netwBuilding pipeline to exceed squotas and maintain consistent cloaverages. Gained extensive granknowledge of strategic marketcustomer acquisition and technologsales strategies.
          </p>

          <p>
          <h2>Code Monki, LLC</h2>
          <h3>Principle Owner</h3>
          <h3>October 2014 - December 2017</h3>
          Cultivating SMB business offerings for managed services, colocation, dedicated servers, disaster recovery, custom IT solutions, consulting services & hosted virtualized solutions via cold calling and developing strategic partnerships for small & medium sized mortgage finance and real estate businesses.
          </p>
          <p>
          <h3>KEY ACHIEVEMENTS:</h3>
          •	Responsible for internally focused activities supporting pricing, go-to-market plans and business processes for product offerings in compliance with The Gramm-Leach-Bliley Act (GLB).
          <br />
          <br />
          •	Met 6-month MRR and NRR goal of 30k for the company in the first 120 days.
          </p>

          <br />
          <br />
          <h2 className="major">EDUCATION</h2>
          <h2>Full Stack Development Bootcamp</h2>
          <h3>University of Denver – Denver, CO</h3>
          <h3>July 2019 – March 2020</h3>
          <p>
          •	A 24-week intensive program focused on gaining technical programming skills in data structures,
          algorithms, local storage, javaScript, SQL databases, responsive design, quality qssurance,
          browser-based technologies and server-side development.

          • HTML/CSS, JavaScript, CSS3, SASS, HTML5,
            JSON, jQuery, Handlebars, Node.js, Express, MySQL 8.0, Responsive Design, Heroku, Git, Bash, Visual Studio Code, Postman, Electron.js, Bootstrap CSS (v4.3), Bulma (v0.8), Zurb Foundation (v6), Skeleton Framework Sequelize, CRUD, MongoDB, Webpack, PWA
          </p>
          <br />
          <br />
          <h2>University of Minnesota-Crookston</h2>
          <h3>2009 – 2011</h3>
          <p>
          • Associate of Arts and Sciences (AAS), Information Technology.
          </p>
          
          <a href="https://github.com/miadugas/Pigeonhole"
                target="_blank" rel="noopener noreferrer">
                <span className="label">Download Resume</span>
              </a>









          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
          Why I Can Help You...
          First and foremost, I love writing code. I am obsessed with the idea of using software to solve practical problems by crafting beautiful & exceptional software that improves the lives of those around me.
          <br />
          <br />
          I am a passionately curious results driven Front-End & Full Stack Web Developer with high level of technical skills combined with the soft skills of relationship management and customer service. I am dedicated to creating user friendly and feature rich web programming and application solutions from mockup to rollout with a life-long commitment to learning and I am prepared to excel in solving your complex technological problems.
          <br />
          <br />
          I am a musician when not creating software and I find there is a beautiful crossover between my software and music. Both challenge many areas of my intellect; creativity, sequential processing, organization and problem solving. The thirst to create beautiful and powerful things and share them with the world keeps me up at night, motivates me onward and gives me purpose. I am always interested in my next challenge. My eclectic background and bohemian upbringing makes me a rare commodity & you can easily get my attention with vegan non-GMO spring greens smoothie or soy chai quad espresso latte.
          </p>
          <img src={miasig} alt="" />

          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Let's start a 
          conversation 
          <br />
          today, shall we?</h2>
          
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
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
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
