import "./Experience.scss"
export default function Experience() {

    return (
        <div className="experience" id="experience">

            <h1>EXPERIENCE</h1>
            <div className="purpleBox"></div>
            <div className="workExperience">
                <div><h3>Morgan Stanley - IST Division</h3>
                    <h4>Technology Analyst Intern  </h4>
                    <h5>January 2021 - August 2021</h5>
                </div>
                <div className="workDetails">
                    <ul>
                        <li>Implemented an automatic transaction processing for the transfer of non-accruing loans<br /><br /></li>
                        <li>Built user interface in <b>React/TypeScript</b> to allow Global Loans Services Operations Team to review and trigger automation for selected loans<br /><br /></li>
                        <li>Built backend web service logic using <b>Spring Boot & SQL</b> to execute automatic booking of trades, journals, and wire transfers to reduce loan transaction  from <b>2 hours to few minutes</b><br /><br /></li>
                        <li>Practiced <b>continuous integration and SDLC process</b> to deploy new feature on Production</li>
                    </ul>
                </div>
            </div>
            <div className="workExperience">
                <div><h3>Nebula AI</h3>
                    <h4>Front End Developer Intern  </h4>
                    <h5>July 2020 – Sep 2020</h5>
                </div>
                <div className="workDetails">
                    <ul>
                        <li>Created a responsive web application using <b>HTML, CSS and Vue</b> to sell computing cloud solution<br /><br /></li>
                        <li>Decreased <b>loading time</b> of website by <b>over 30%</b> using lazy loading feature in Vue<br /><br /></li>
                        <li>Added a lightweight translation module (i18n) to co-worker’s project, which allowed users to view the website in multiple languages<br /><br /></li>
                    </ul>
                </div>
            </div>
        </div >
    )
}