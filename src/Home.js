import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61DUO0NqyyL._SX3000_.jpg" alt="" />

                <div className="home__row">
                    <Product
                        id="12321341"
                        title="Cracking the Coding Interview: 189 Programming Questions and Solutions 6th Edition"
                        price={11.96}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg"
                    />

                    <Product
                        id="49538094"
                        title="Acer Nitro 5 AN515-57-79TD Gaming Laptop | Intel Core i7-11800H | NVIDIA GeForce RTX 3050 Ti Laptop GPU | 15.6 FHD 144Hz IPS Display | 8GB DDR4 | 512GB NVMe SSD | Killer Wi-Fi 6 | Backlit Keyboard"
                        price={200.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/81lDOtJRTkL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
                    />

                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Amazfit GTS 2 Mini Smart Watch GPS Fitness Tracker for Men Women, Alexa Built-in, 14 Days Battery Life, 70+ Sports Modes, Blood Oxygen Heart Rate Sleep Monitor, AMOLED Screen, 5 ATM Waterproof-Black"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/61dHtJrlcOL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Texas Instruments TI-84 Plus CE Color Graphing Calculator, Black 7.5 Inch"
                        price={98.99}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/71yrLllDokL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                    />
                    <Product
                        id="3254354345"
                        title="Corsair K70 RGB PRO Wired Mechanical Gaming Keyboard (Cherry MX RGB Red Switches: Linear and Fast, 8,000Hz Hyper-Polling, PBT Double-Shot PRO Keycaps, Soft-Touch Palm Rest) QWERTY, NA - Black"
                        price={598.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81NHLnqXopL._AC_SX679_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="SAMSUNG 75-Inch Class Neo QLED 4K QN95B Series Mini LED Quantum HDR 32x, Dolby Atmos, Object Tracking Sound+, Anti-Glare Screen, Smart TV with Alexa Built-In (QN75QN95BAFXZA, 2022 Model)"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/81Ese5xRwkL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
                    />
                </div>

            </div>
        </div>
    )
}

export default Home