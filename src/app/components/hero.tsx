import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
const Hero=()=>{
    return(
<section className="home" id="home">
        <div className="home-content">
            <h3>hi,myself</h3>
            <h1>Asma Ali</h1>
            <h3>And I am a <span>frontend Developer</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatem in culpa aut itaque
                necessitatibus non nostrum! Suscipit voluptate maiores omnis dolore illum, aperiam, id corporis
                assumenda ipsam cupiditate quam.</p>
            <div className="social-media">
                
                < a href="#"><FaFacebookF /></a>
                < a href="#"><FaLinkedin  /></a>
                < a href="#"><FaInstagramSquare  /></a>
                < a href="#"><FaTwitter   /></a>
                
                

                

            </div>
            <a href="#" className="btn">Download CV</a>
        </div>
        <div className="home-img">
            <img src="/profile1.jpeg"/>

        </div>

    </section>
    )
}
export default Hero