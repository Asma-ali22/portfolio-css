import React from "react";
import Link from "next/link";




const Navbar=()=>{
    return(
   <div>
    <header className="header">
        <a href="#" className="logo">portfolio</a>
        <i className="fa-solid fa-bars" id="menu-icon"></i>

        <nav className="Navbar">
            <Link href="#Home" className="active">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#services">Services</Link>
            <Link href="#projects">Projects</Link>
            < Link href="#contact">Contact</Link>
        </nav>
    </header>
   </div>
    )
}
export default Navbar