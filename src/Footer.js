import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__one footer__section">
                    <div className="footer__title">Get To Know Us</div>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>About Amazon</p>
                    <p>Amazon Devices</p>
                    <p>Amazon Images</p>
                </div>

                <div className="footer__two footer__section">
                    <div className="footer__title">Make Money with us</div>
                    <p>Sell on Amazon</p>
                    <p>Sell on Amazon Business</p>
                    <p>Sell Your Apps on Amazon</p>
                    <p>Become an Affiliate</p>
                    <p>Advertise Your Products</p>
                    <p>Self-Publish with Us</p>
                    <p>Host an Amazon Hub</p>
                    <p>Amazon Gaming Services</p>
                </div>

                <div className="footer__three footer__section">
                    <div className="footer__title">Amazon Payment Products</div>
                    <p>Amazon Business Card</p>
                    <p>Shop with Points</p>
                    <p>Reload Your Balance</p>
                    <p>Amazon Currency Converter</p>
                </div>

                <div className="footer__four footer__section">
                    <div className="footer__title">Let Us Help You</div>
                    <p>Your Orders</p>
                    <p>Shipping Rates & Policies</p>
                    <p>Returns & Replacements</p>
                    <p>Manage Your Content and Devices</p>
                    <p>Amazon Assistant</p>
                    <p>Help</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;