import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <footer className="footer" >
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc ut vestibulum diam.
                        Vivamus efficitur, ante eget dapibus rutrum, nulla lorem iaculis ligula,
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>

                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">
                            Phone: 9876-543-210
                        </div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">
                            Email: care@sk.mail
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <div className="text">Headphones</div>
                    <div className="text">Smart Watches</div>
                    <div className="text">Bluetooth Speakers</div>
                    <div className="text">Wireless Earpods</div>
                    <div className="text">Home Theaters</div>
                    <div className="text">Projectors</div>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <div className="text">Home</div>
                    <div className="text">About</div>
                    <div className="text">Privecy Policy</div>
                    <div className="text">Returns</div>
                    <div className="text">Tearm & Conditions</div>
                    <div className="text">Contact Us</div>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        "There is no one who loves pain itself, who seeks after it and wants to have it ,There is no one who loves pain"
                    </div>
                    <img src={Payment} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
