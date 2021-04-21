import "./NavBar.scss"
import Typewriter from 'typewriter-effect';

function NavBar() {
    return (
        <div className="frontPage">
            <nav className="navBar">
                <li><a href="#welcome">Home</a></li>
                <li><a href="#secondpage">About</a></li>
                <li><a href="#thirdpage">Resume</a></li>
                <li><a href="#Projects">Project</a></li>
            </nav>
            <video src="/videos/cloudSky.mov" autoPlay loop muted />
            <div className="intro">
                <h1 className="name">I AM YI FANG YUAN</h1>
                <h3>And I am a ...</h3>
                <h3><Typewriter options={{
                    strings: ['Full Stack Developer', 'McGill Software Engineering Student', 'Java Developer', 'React Developer'],
                    autoStart: true,
                    loop: true
                }}
                /></h3>
            </div>
        </div>
    )
}


export default NavBar;