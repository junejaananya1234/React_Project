import "./style.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GiBasketballBall } from "react-icons/gi";


const Footer = ()=>{
    return(
        <div className="MainContainer">
            <section className="sect1">
                <img src="https://jpcdn.it/img/6b3a23bf8e1be1ffb021c27ff174815f.jpg" height="40px" width="50px" ></img>
                <p>GeekFood</p>
            </section>
            <section className="sect2">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque</p>
            </section>
            <section className="sect3">
                <ul className="list">
                    <li>About</li>
                    <li>Careers</li>
                    <li>History</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Blog</li>
                </ul>
            </section>
            <section className="sect4">
            <FaFacebook />
            <FaInstagramSquare />
            <FaTwitter />
            <FaGithub />
            <GiBasketballBall />

            </section>
        </div>
    )
}

export default Footer;