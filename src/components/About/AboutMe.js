import "./AboutMe.scss"
import Col from 'react-bootstrap/Col';

export default function AboutMe() {
    return (
        <div className="frontPage">
            <div id="about" className="about">
                <img className="profile-pic" src="https://user-images.githubusercontent.com/52011886/115975547-bac01e00-a533-11eb-8fde-4713b3417ed2.png" alt="true" />
                <Col md={{ span: 5, offset: 1 }} className="description">
                    <h3>ABOUT ME</h3>
                    <div className="blueBox"></div>
                    <p>I am
                    a 3rd year software engineering student at McGill University who is currently working as a
                    technology analyst intern (Full Stack Developer) at Morgan Stanley.
                        <br></br>
                        I am very passionate about web development and its ability to bring impact to the real world.
                        Hence why I chose to work for Hack4Impact as a software developer during my free time, a student-run
                        organization aiming to create social good through the means of technology.
                        <br></br>I am open for Summer 2022 internship opportunity,
                        if you think I am a good fit, please do not hesitate to reach out to me !
                        </p>
                </Col>
            </div>

        </div>
    )
}