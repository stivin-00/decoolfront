import React, { useState } from "react";
import { Menu } from "antd";
import {  FaEnvelope, FaMoneyBillWave, FaPhone, FaMapMarkerAlt, FaHome, FaShoppingBasket, FaShoppingCart, FaRegHeart, FaBars, FaTimes, FaUserTie } from 'react-icons/fa';
// import { BsPersonFill  } from 'react-icons/bs';
import {
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Search from "../forms/Search";

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");
     const [Click, setClick] = useState(false)
   
   const closeSidebar = () => {
       setClick(false)
   };
   const openSidebar = () => {
    setClick(!Click)
   };

  let dispatch = useDispatch();
  let { user, cart } = useSelector((state) => ({ ...state }));

  let history = useHistory();

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };

  return (
    <>
         <header>
		        <div>
					<div>
						<div>
							<div>
											<div className="top-header">
				<div className="container">
					<ul className="header-links pull-left">
						<li><Link><i className="fa"><FaPhone/></i> +234 823 513 317</Link></li>
						<li><Link><i className="fa "><FaEnvelope/></i> ekeleagbakwuru9@gmail.com</Link></li>
						<li><Link ><i className="fa "><FaMapMarkerAlt/></i> 173 Ikeja City Mall</Link></li>
					</ul>
					<ul className="header-links pull-right">
						<li><Link to="/payment"><i className="fa"><FaMoneyBillWave/></i>NGN</Link></li>
						<li><Link to="/user-history"><i className="fa "><FaUserTie/></i> My Account</Link></li>
					</ul>
				</div>
			</div>

			<div className="header">

				<div className="container">

					<div className="row">
	
						<div className="col-lg-2">
							<div className="header-logo">
								<Link to="/" className="logo">
									<span className="logox"><h1 className="start">De</h1><h1 className="end">cool</h1></span>
								</Link>
							</div>
						</div>

            <div className="col-lg-2 clearfix clearfix2">
              <div className="header-ctn">
              	<div>
					<Link to="/">
					    <i className=""><FaHome/></i>
						    <span>
                             Home
							</span>
					</Link>
				</div>

              	<div>
					<Link to="/shop">
                  	    <i className=""><FaShoppingBasket/></i>
							<span>Shop</span>
					</Link>
				</div>
              </div>
            </div>

            <div className="col-lg-4 serchs">
				<span>
                     <Search />
                </span>
			</div>

	        <div className="responanv col-lg-4">
			<div className="col-lg-2 clearfix">
              <div className="header-ctn ctn-second">
              	<div className="menu-controler">
					    <i className="fa fa-heart-n"><FaUserTie /></i>
						<Menu className="menu-iconx">
						    <span className="submenu">
							    {!user && (
									
									<span className="submenu submenux">
									<Item key="login" >
									<Link className="menu-link link11" to="/register">Register</Link>
									<span>/</span>
									<Link className="menu-link link22" to="/login">Login</Link>
									</Item>
									</span>
									
								)}
								{user && (
									<SubMenu 
									title={user.email && user.email.split("@")[0]}
									className="submenub"
									>
									{user && user.role === "subscriber" && (
										<Item >
										<Link to="/user-history">Dashboard</Link>
										</Item>
									)}

									{user && user.role === "admin" && (
										<Item>
										<Link to="admin-dashboard">Dashboard</Link>
										</Item>
									)}

									<Item icon={<LogoutOutlined />} onClick={logout}>
										Logout
									</Item>
									</SubMenu>
								)}
							</span>
						</Menu>
					
				</div>
              </div>
            </div>

		<div className="col-lg-2 clearfi">
			<div className="header-ctn ctn-last">
				<div>
					<Link to="/user-wishlist">
						<i className=""><FaRegHeart/></i>
						<span>Your Wishlist</span>
						<div className="qty">∞</div>
					</Link>
				</div>

            <div>
				<Link to="/cart">
                  	<i className=""><FaShoppingCart/></i>
						<span>Your Cart</span>
						<div className="qty">{cart.length}</div>
				</Link>
			</div>

								<div className="menu-toggle " onClick={openSidebar}>
									{Click ? (
									<Link >
										<i className="fa "><FaTimes/></i>
										<span>close</span>
									</Link>
									) : (
									<Link>
										<i className="fa "><FaBars/></i>
										<span>Menu</span>
									</Link>
									)}
								</div>
							</div>
						</div>
				</div>
					</div>
				</div>
			</div>
			 <div>
    {Click ? (
		
		
				
				<div className="responsive-nav">
				
					<ul className="main-nav nav navbar-nav " onClick={closeSidebar}>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/shop">shop</Link></li>
						<li><Link to="/cart">Cart</Link></li>
						<li><Link to="/user-history">Dashboard</Link></li>
						<li><Link to="/shop">Smartphones</Link></li>
						<li><Link to="/shop">Cameras</Link></li>
						<li><Link to="/shop">Accessories</Link></li>
					</ul>
					
				</div>
				
		

		  ) : (
      ''
    )} 
  </div>
							</div>
						</div>
					</div>
				</div>
	     </header>  
    </>
  );
};

export default Header;
