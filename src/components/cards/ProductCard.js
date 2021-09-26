import React, { useState } from "react";
import { Card, Tooltip } from "antd";
import {  FaRegHeart, FaEye } from 'react-icons/fa';
import laptop from "../../images/laptop.png";
import { Link } from "react-router-dom";
import { showAverage } from "../../functions/rating";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";

const { Meta } = Card;

const ProductCard = ({ product }) => {
  const [tooltip, setTooltip] = useState("Click to add");
  const [toolname, setToolname] = useState("ADD TO CART");

  // redux
  const { user, cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // create cart array
    let cart = [];
    if (typeof window !== "undefined") {
      // if cart is in local storage GET it
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // push new product to cart
      cart.push({
        ...product,
        count: 1,
      });
      // remove duplicates
      let unique = _.uniqWith(cart, _.isEqual);
      // save to local storage
      // console.log('unique', unique)
      localStorage.setItem("cart", JSON.stringify(unique));
      // show tooltip
      setTooltip("Added");
      setToolname("Added");

      // add to reeux state
      dispatch({
        type: "ADD_TO_CART",
        payload: unique,
      });
      // show cart items in side drawer
      dispatch({
        type: "SET_VISIBLE",
        payload: true,
      });
    }
  };

  // destructure
  const { images, title, description, slug, price, category } = product;
  
  return (
    <>
      {/* {product && product.ratings && product.ratings.length > 0 ? (
        showAverage(product)
      ) : (
        <div className="text-center pt-1 pb-3">No rating yet</div>
      )}

      <Card
        cover={
          <img
            src={images && images.length ? images[0].url : laptop}
            style={{ height: "150px", objectFit: "cover" }}
            className="p-1" alt="i"
          />
        }
        actions={[
          <Link to={`/product/${slug}`}>
            <EyeOutlined className="text-warning" /> <br /> View Product
          </Link>,
          <Tooltip title={tooltip}>
            <a onClick={handleAddToCart} disabled={product.quantity < 1}>
              <ShoppingCartOutlined className="text-danger" /> <br />
              {product.quantity < 1 ? "Out of stock" : "Add to Cart"}
            </a>
          </Tooltip>,
        ]}
      >
        <Meta
          title={`${title} - $${price}`}
          description={`${description && description.substring(0, 40)}...`}
        />
      </Card> */}



              <div className="single-product-wrap">
                  <div className="product-image">
                      <Link to={`/product/${slug}`}>
                            <img
                              src={images && images.length ? images[0].url : laptop}
                              style={{ height: "150px", objectFit: "cover", width: "100%" }}
                               alt="i"
                            />
                      </Link>
                      <span className="sticker">New</span>
                  </div>
                  <div className="product_desc">
                      <div className="product_desc_info">
                          <div className="product-review">
                              <h5 className="manufacturer">
                                  <Link to="">{product.brand}</Link>
                              </h5>
                              <div className="rating-box">
                                  <ul className="rating">
                                      {product && product.ratings && product.ratings.length > 0 ? (
                                        showAverage(product)
                                      ) : (
                                        <div className="text-center pt-1 pb-3">No rating yet</div>
                                      )}
                                  </ul>
                              </div>
                          </div>
                          <h4><Link className="product_name" to={`/product/${slug}`}>{title}</Link></h4>
                          <div className="price-box">
                              <span className="new-price">₦{price}</span>
                          </div>
                      </div>
                      <div className="add-actions">
                          <ul className="add-actions-link">
                            <Tooltip title={tooltip}>
                              <li className="add-cart"><Link to="#" onClick={handleAddToCart} disabled={product.quantity < 1}>{toolname}</Link></li>
                            </Tooltip>
                              <li className="links-details"><Link className="links-details" to="user-wishlist"><i className=""><FaRegHeart/></i></Link></li>
                              <li className="quick-view-btn"><Link to={`/product/${slug}`} title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className=""><FaEye/></i></Link></li>
                          </ul>
                      </div>
                  </div>
              </div>
                                      
    </>
  );
};

export default ProductCard;
