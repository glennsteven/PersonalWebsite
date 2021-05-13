import React from "react";
//Untuk Animasi Ketik
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Web Development And A newbie Web Design</h1>
                <Typed
                    className="typed-text"
                    strings={["Web Design", "Web Develoment", "Student of universitas kristen satya wacana"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                 <a className="btn-main-offer" href="#">contact me</a>
            </div>
        </div>
    )
}

export default Header
