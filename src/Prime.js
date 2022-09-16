import React from 'react';
import './Prime.css';
import Product from './Product';

function Prime() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51SawtSe3JL._SX1500_.jpg" alt="" />

        <div className="home__row">
          <Product
            id="123213413"
            title="XZGDEN Lightweight Ergonomic Chair Gaming Seats,Computer Office Chair Reclining Game Racing Chair Lift E-Sports Chair (Color : Brown) (Color : White)"
            price={9985}
            rating={7}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61wMI1gkQPL._AC_SX679_.jpg"
          />

          <Product
            id="495380946"
            title="DJI Mini 3 Pro (DJI RC) – Lightweight and Foldable Camera Drone with 4K/60fps Video, 48MP Photo, 34-min Flight Time, Tri-Directional Obstacle Sensing, Ideal for Aerial Photography and Social Media"
            price={900}
            rating={7}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61Y1P6uIRFL._AC_SX679_.jpg"
          />

        </div>

        <div className="home__row">
          <Product
            id="49038505"
            title="Thermaltake Glacier 360 Liquid-Cooled PC & AOC C27G2Z 27 Curved Frameless Ultra-Fast Gaming Monitor FHD 1080p 0.5ms 240Hz FreeSync HDMI DP VGA Height Adjustable Black 27 FHD Curved"
            price={1900}
            rating={7}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/518Og73+0iL._AC_SX679_.jpg"
          />
          <Product
            id="234459305"
            title="Intel BX80673I99960X Core i9-9960X X-Series Processor 16 Cores up to 4.4GHz Turbo Unlocked LGA2066 X299 Series 165W Processors (999AC7)"
            price={1950}
            rating={7}
            image="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/81t4McdI7PL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Product
            id="325435434"
            title="Leica Q2 Monochrom Full Frame Compact Digital Camera"
            price={6200}
            rating={7}
            image="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/61BmjmQHZUL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="9082933"
            title="PS5 Console- Horizon Forbidden West Bundle"
            price={590}
            rating={7}
            image="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/31URBlM8xoL._SY300_SX300_QL70_FMwebp_.jpg"
          />
        </div>
      </div>
    </div>
  )
}

export default Prime