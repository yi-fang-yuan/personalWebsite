import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Project.scss'
export default function Project() {

    return (
        <Container fluid className="projects" id="projects">

            <h1>PROJECTS</h1>
            <div className="purpleBox"></div>
            <Row xs={12} lg={7} className="project">
                <Col md={6} xs={12} className="project-pic">
                    <a target="_blank" href="https://yiyi-covid19-tracker.herokuapp.com/"><img src="https://user-images.githubusercontent.com/52011886/116006886-290beb80-a5db-11eb-95a8-1d127a00c43b.png" alt="true"></img>
                    </a>
                </Col>
                <Col md={6} xs={12}>
                    <h4>Covid Tracker</h4>
                    <a target="_blank" href="https://yiyi-covid19-tracker.herokuapp.com/"><h3>COVID-19-TRACKER</h3>
                    </a>
                    <ul>
                        <li>Built a web interface  using <b>Vuex</b> to monitor real-time covid cases with graphical analytics <br /><br /></li>
                        <li>Used the <b>mathdroid covid-19-api</b> to fetch the most recent statistics from each country <br /><br /></li>
                        <li>Built backend web service logic using <b>Spring Boot & SQL</b> to execute automatic booking of trades, journals, and wire transfers to reduce loan transaction  from <b>2 hours to few minutes</b><br /><br /></li>
                        <li>Practiced <b>continuous integration and SDLC process</b> to deploy new feature on Production</li>
                    </ul>
                    <Row className="languages">
                        <Col md={2} xs={2} className="React"><h5>VUE</h5></Col>
                        <Col md={{ span: 3 }} xs={4} className="JavaScript"><h5>JAVASCRIPT</h5></Col>
                    </Row>
                </Col>
            </Row >
            <Row xs={12} lg={9} className="project">
                <Col md={6} xs={12} className="project-pic">
                    <a target="_blank" href="https://mumap.xyz/"><img src="https://user-images.githubusercontent.com/52011886/116021151-9f2d4400-a615-11eb-8b21-c1d0c42c176b.png" alt="true"></img>
                    </a>
                </Col>
                <Col md={6} xs={12}>
                    <h4>Open-Air Museum for Artists</h4>
                    <a target="_blank" href="https://mumap.xyz/"><h3>MU MAP</h3>
                    </a>
                    <ul>
                        <li>Developed a progressive web app for MUMTL to locate murals in Montreal on map with information<br /><br /></li>
                        <li>Built RESTful API in <b>Express.js </b>and <b>Node.js</b> to perform all CRUD operations on production data   <br /><br /></li>
                        <li>Created visual display of search result from <b>100 + murals</b> in database using <b>React and TypeScript</b><br /><br /></li>
                        <li>Implemented <b>instant rendering </b> to avoid reloading the whole website for newly created murals on the webpage using <b>React Context</b></li>
                    </ul>
                    <Row className="languages">
                        <Col md={2} xs={2} className="JavaScript"><h5>VUE</h5></Col>
                        <Col md={{ span: 3 }} xs={4} className="JavaScript"><h5>JAVASCRIPT</h5></Col>
                    </Row>
                </Col>
            </Row >
        </Container >
    )
}