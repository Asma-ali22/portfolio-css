import React from "react";

const Services=()=>{
    return(
        <section className="services" id="services">
        <h2 className="heading"><span>My</span>services</h2>

        <div className="services-container">
            <div className="services-box">
                <i className="fa-solid fa-code"></i>
                <h3>Web Development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloremque cumque voluptas
                    excepturi dignissimos, sapiente adipisci obcaecati quibusdam perspiciatis laboriosam repellat porro
                    veritatis, aliquam quasi neque sed quod ex aspernatur?</p>
                <a href="#" className="btn">Read More</a>
            </div>

            <div className="services-box">
                <i className="fa-solid fa-palette"></i>
                <h3>UI/UX/</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloremque cumque voluptas
                    excepturi dignissimos, sapiente adipisci obcaecati quibusdam perspiciatis laboriosam repellat porro
                    veritatis, aliquam quasi neque sed quod ex aspernatur?</p>
                <a href="#" className="btn">Read More</a>
            </div>

            <div className="services-box">
                <i className="fa-brands fa-android"></i>
                <h3>App Development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloremque cumque voluptas
                    excepturi dignissimos, sapiente adipisci obcaecati quibusdam perspiciatis laboriosam repellat porro
                    veritatis, aliquam quasi neque sed quod ex aspernatur?</p>
                <a href="#" className="btn">Read More</a>
            </div>
        </div>
    </section>
    )
}
export default Services