import "./NavBar.scss"
import React, { useState, useEffect } from 'react';

function NavBar() {
    const [navBarColor, setNavBarColor] = useState(null);
    useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.scrollY > window.innerHeight) {
                document.querySelector(".navBar").className = "navBar scroll"
            }
            else {
                document.querySelector(".navBar").className = "navBar"
            }
        });
    });

    return (
        <nav className="navBar">
            <li><a href="#welcome">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Resume</a></li>
            <li><a href="#projects">Project</a></li>
        </nav>
    )
}


export default NavBar;