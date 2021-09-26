import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Link } from "react-router-dom";
import slider from "../../img/slider/1.jpg"
import slider2 from "../../img/slider/2.jpg"
import slider3 from "../../img/slider/3.jpg"
import bann1 from "../../img/banner/1_1.jpg"
import bann2 from "../../img/banner/1_2.jpg"

const Hero = () => {

   const fadeImages = [
  {
  url: `${slider}`,
  caption: 'Samsung Sx',
  link: "samsung-sx"
  },
  {
  url: `${slider2}`,
  caption: 'Macbook 2016',
  link: "macbook-2016"
  },
  {
  url: `${slider3}`,
  caption: 'Asus Drone 11',
  link: "asus-drone-11"
  },
];


  const fadeProperties = {
    duration: 3000,
    pauseOnHover: true,
    indicators: true,
  };

    return (
        <div>
            <div className="slider-with-banner" style={{ width: "100vw"}}>
                <div className="containe">
                    <div className="">
                        
                        <div className="col-lg-8 col-md-8 col-sm-8" >
                            <div className="slider-area" 
                             >
                                <div className="slider-active ">
                              <Fade {...fadeProperties}>
                                 {fadeImages.map((fadeImage, index) => (
                                    <div className="each-fade single-slide align-center-left bg-1" style={{ 
                                        backgroundImage: `url(${fadeImage.url})`
                                        }} >
                                        <div className="slider-progress"></div>
                                        <div className="slider-content" >
                                            <h5>Sale Offer <span>-20% Off</span> This Week</h5>
                                            <h2>{fadeImage.caption}</h2>
                                            <h3>Starting at <span>₦1209.00</span></h3>
                                            <div className="default-btn slide-btn">
                                                <Link className="add-to-cart-btn" to={`/product/${fadeImage.link}`} style={{ height: "80px"}}>Shopping Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                             </Fade>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 text-center pt-xs-30">
                            <div className="li-banner">
                                <Link to="/shop">
                                    <img src={bann1} alt=""/>
                                </Link>
                            </div>
                            <div className="li-banner li-banner33 mt-15 mt-sm-30 mt-xs-30">
                                <Link to="/shop">
                                    <img src={bann2} alt=""/>
                                </Link>
                            </div>
                        </div>
                </div>
            </div>
        </div>

    </div>
    )
}

export default Hero
