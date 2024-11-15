import React from "react";
const About=()=>{
    return(
<section className="about" id="about">
        <div className="about-img">
            <img src="/profile1.jpeg" alt=""/>

        </div>
        <div className="about-content">
            <h2 className="heading">About<span> Me</span></h2>
            <h3>Frontend Developer</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptate facilis modi veritatis
                sequi. Ut nam dolor cum dolorem voluptas reprehenderit, provident voluptatibus deserunt quo nulla, iste
                nesciunt consequuntur expedita?</p>
            <a href="#" className="btn">Read More</a>
        </div>

    </section>
    )
}
export default About