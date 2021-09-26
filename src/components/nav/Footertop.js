import React from 'react'
import ship from "../../img/shipping-icon/1.png"
import pay from "../../img/shipping-icon/2.png"
import protect from "../../img/shipping-icon/3.png"
import help from "../../img/shipping-icon/4.png"
import { FaShippingFast, FaRegCreditCard, FaRocketchat,} from 'react-icons/fa';
import { MdVerifiedUser} from 'react-icons/md';

const Footertop = () => {
    return (
        <div>
             <div className="footer-static-top">
                    <div className="container">
        
                        <div className="footer-shipping pt-60 pb-55 pb-xs-25">
                            <div className="row">
                            
                                <div className="col-lg-3 col-md-3 col-sm-3 col-6">
                                    <div className="li-shipping-inner-box">
                                        <div className="shipping-icon">
                                            <FaShippingFast style={{ color: "#D10024", fontSize: "50px"}}/>
                                        </div>
                                        <div className="shipping-text">
                                            <h2>Free Delivery</h2>
                                            <p>And free returns. See checkout for delivery dates.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-3 col-sm-3 col-6 ">
                                    <div className="li-shipping-inner-box">
                                        <div className="shipping-icon">
                                            <FaRegCreditCard style={{ color: "#D10024", fontSize: "50px"}}/>
                                        </div>
                                        <div className="shipping-text">
                                            <h2>Safe Payment</h2>
                                            <p>Pay with the world's most popular and secure payment methods.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-3 col-sm-3 col-6 ">
                                    <div className="li-shipping-inner-box">
                                        <div className="shipping-icon">
                                            <MdVerifiedUser style={{ color: "#D10024", fontSize: "50px"}}/>
                                        </div>
                                        <div className="shipping-text">
                                            <h2>Shop with Confidence</h2>
                                            <p>Our Buyer Protection covers your purchasefrom click to delivery.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col-6 ">
                                    <div className="li-shipping-inner-box">
                                        <div className="shipping-icon">
                                            <FaRocketchat style={{ color: "#D10024", fontSize: "50px"}}/>
                                        </div>
                                        <div className="shipping-text">
                                            <h2>24/7 Help Center</h2>
                                            <p>Have a question? Call a Specialist or chat online.</p>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>

                    </div>
                </div>
        </div>
    )
}

export default Footertop
