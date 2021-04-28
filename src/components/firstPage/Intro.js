import Typewriter from 'typewriter-effect';
import "./Intro.scss";
export default function Intro() {
    return (
        <div id="welcome" className="frontPage">
            <div className="intro">
                <h1 className="name">YI FANG YUAN</h1>
                <h3><Typewriter options={{
                    strings: ['Full Stack Developer', 'McGill Software Engineering Student', 'Software Developer', 'React Developer'],
                    autoStart: true,
                    loop: true
                }}
                /></h3>
                <a href="#experience" className="box">
                    <h4>View My Resume</h4>
                </a>

                <div className="icons">
                    {/* <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/yi-fang-yuan-427378170/"><i className="fab fa-linkedin"></i></a> */}
                    <a target="_blank" rel="noreferrer" href="https://github.com/yi-fang-yuan"><i class="fab fa-github"></i></a>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/yi_yifang/"><i class="fab fa-instagram"></i></a>
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/yifang.yuan.3/"><i class="fab fa-facebook"></i></a>
                </div>
            </div>
        </div >
    )
}