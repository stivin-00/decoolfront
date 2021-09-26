import React from 'react'
import { Link } from "react-router-dom";
import background from "../../img/hotdeal.png"

const Banner = () => {
    return (
        <div>
    	<div className="hot-deals section" style={{ 
      backgroundImage: `url(${background})`
    }} >
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="hot-deal">
							<ul className="hot-deal-countdown">
								<li>
									<div>
										<h3>02</h3>
										<span>Days</span>
									</div>
								</li>
								<li>
									<div>
										<h3>10</h3>
										<span>Hours</span>
									</div>
								</li>
								<li>
									<div>
										<h3>34</h3>
										<span>Mins</span>
									</div>
								</li>
							</ul>
							<h2 className="text-uppercase">hot deal this week</h2>
							<p>New Collection Up to 50% OFF</p>
							<Link className="primary-btn cta-btn" to="/shop">Shop now</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
        </div>
    )
}

export default Banner
