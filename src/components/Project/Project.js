
import './Project.scss'
export default function Project() {

    const languageStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "1.5rem",
        padding: "5px 10px 5px 10px",
        borderRadius: "20.9381px",
    }

    const chooseSkillColor = (params) => {
        let dummy = Object.assign({}, languageStyle);
        switch (params) {
            case 'javascript':
                dummy.backgroundColor = "#ffb37b";
                return dummy;

            case 'react':
                dummy.backgroundColor = "#a7d7f2";
                return dummy;

            case 'vue':
                dummy.backgroundColor = "#00ff7f";
                return dummy;

            case 'express':
                dummy.backgroundColor = "#A0522D";
                return dummy;
            case 'typescript':
                dummy.backgroundColor = "#66CDAA";
                return dummy;
            case 'php':
                dummy.backgroundColor = "#9370DB";
                return dummy;
            case 'laravel':
                dummy.backgroundColor = "#FF0000";
                return dummy;
            default:
                return dummy;
        }
    }

    return (
        <div className="projects" id="projects">

            <h1>PROJECTS</h1>
            <div className="purpleBox"></div>
            <div className="project">
                <a target="_blank" rel="noreferrer" href="https://yiyi-covid19-tracker.herokuapp.com/"><img className="project-pic" src="https://user-images.githubusercontent.com/52011886/116006886-290beb80-a5db-11eb-95a8-1d127a00c43b.png" alt="true"></img>
                </a>
                <div className="description">
                    <h4>Covid Tracker</h4>
                    <a target="_blank" rel="noreferrer" href="https://yiyi-covid19-tracker.herokuapp.com/"><h3>COVID-19-TRACKER</h3>
                    </a>
                    <ul>
                        <li>Built a web interface  using <b>Vuex</b> to monitor real-time covid cases with graphical analytics <br /><br /></li>
                        <li>Used the <b>mathdroid covid-19-api</b> to fetch the most recent statistics from each country <br /><br /></li>
                        <li>Built backend web service logic using <b>Spring Boot & SQL</b> to execute automatic booking of trades, journals, and wire transfers to reduce loan transaction  from <b>2 hours to few minutes</b><br /><br /></li>
                        <li>Practiced <b>continuous integration and SDLC process</b> to deploy new feature on Production</li>
                    </ul>
                    <div className="languages">
                        <div style={chooseSkillColor("vue")}><h5>VUE</h5></div>
                        <div style={chooseSkillColor("javascript")}><h5>JAVASCRIPT</h5></div>
                    </div>
                </div>
            </div >
            <div className="project">
                <div className="picture">
                    <a target="_blank" rel="noreferrer" href="https://mumap.xyz/"><img className="project-pic" src="https://user-images.githubusercontent.com/52011886/116021151-9f2d4400-a615-11eb-8b21-c1d0c42c176b.png" alt="true"></img>
                    </a>
                </div>
                <div className="description">
                    <h4>Open-Air Museum for Artists</h4>
                    <a target="_blank" rel="noreferrer" href="https://mumap.xyz/"><h3>MU MAP</h3>
                    </a>
                    <ul>
                        <li>Developed a progressive web app for MUMTL to locate murals in Montreal on map with information<br /><br /></li>
                        <li>Built RESTful API in <b>Express.js </b>and <b>Node.js</b> to perform all CRUD operations on production data   <br /><br /></li>
                        <li>Created visual display of search result from <b>100 + murals</b> in database using <b>React and TypeScript</b><br /><br /></li>
                        <li>Implemented <b>instant rendering </b> to avoid reloading the whole website for newly created murals on the webpage using <b>React Context</b></li>
                    </ul>
                    <div className="languages">
                        <div style={chooseSkillColor("react")}><h5>REACT</h5></div>
                        <div style={chooseSkillColor("javascript")}><h5>JAVASCRIPT</h5></div>
                        <div style={chooseSkillColor("typescript")}><h5>TYPESCRIPT</h5></div>
                        <div style={chooseSkillColor("express")}><h5>EXPRESS.JS</h5></div>
                    </div>
                </div>
            </div >

            <div className="project">
                <div className="picture">
                    <a target="_blank" rel="noreferrer" href="http://yiyi-luxury.herokuapp.com/"><img className="project-pic" src="https://user-images.githubusercontent.com/52011886/116259318-b23e3200-a743-11eb-90a4-dfa01d3d746a.png" alt="true"></img>
                    </a>
                </div>
                <div className="description">
                    <h4>PERSONAL SHOP</h4>
                    <a target="_blank" rel="noreferrer" href="http://yiyi-luxury.herokuapp.com/"><h3>YIYI LUXURY</h3>
                    </a>
                    <ul>
                        <li>Online e-commerce shopping web app using <b>Laravel and Eloquent ORM </b> to interact with SQL database<br /><br /></li>
                        <li>Front End built with Laravel blade template and Bootstrap 4.<br /><br /></li>
                        <li>Populating and categorizing up to 100 luxury products using query builder and database seeding<br /><br /></li>
                    </ul>
                    <div className="languages">
                        <div style={chooseSkillColor("laravel")}><h5>LARAVEL</h5></div>
                        <div style={chooseSkillColor("php")}><h5>PHP</h5></div>
                    </div>
                </div>
            </div >
        </div >
    )
}