import React, { useState, useEffect } from "react";
import UserNav from "../../components/nav/UserNav";
import { getWishlist, removeWishlist } from "../../functions/user";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {  FaTrash } from 'react-icons/fa';
import _ from "lodash";
import laptop from "../../images/laptop.png";
import ModalImage from "react-modal-image";

const Wishlist = ( {product}) => {
  const [wishlist, setWishlist] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
 
// const { title, images, description, _id } = product;

  useEffect(() => {
    loadWishlist();
  }, []);

  const loadWishlist = () =>
    getWishlist(user.token).then((res) => {
      // console.log(res);
      setWishlist(res.data.wishlist);
    });

  const handleRemove = (productId) =>
    removeWishlist(productId, user.token).then((res) => {
      loadWishlist();
    });

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


  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <UserNav />
        </div>
        <div className="col">
          <h2 style={{ marginTop : "8px", justifySelf: "center"}}>Wishlist</h2>
          
                    <div className="row">
                        <div className="col-12">
                            <form action="#">
                                <div className="table-content table-responsive">
                                    <table className="table">
                                        <thead className="thead-light">
                                            <tr>
                                                <th className="li-product-remove">remove</th>
                                                <th className="li-product-thumbnail">images</th>
                                                <th className="cart-product-name">Product</th>
                                                <th className="li-product-price">Unit Price</th>
                                                <th className="li-product-stock-status">Stock Status</th>
                                                <th className="li-product-add-cart">add to cart</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                          {wishlist.map((p) => (
                                            <tr>
                                                <td className="li-product-remove"><Link onClick={() => handleRemove(p._id)}><i className=""><FaTrash/></i></Link></td>
                                                <td className="li-product-thumbnail">
                                                  <div style={{ width: "100px", height: "auto" }}>
                                                    {p.images.length ? (
                                                      <ModalImage small={p.images[0].url} large={p.images[0].url} />
                                                    ) : (
                                                      <ModalImage small={laptop} large={laptop} />
                                                    )}
                                                  </div>
                                                </td>
                                                <td className="li-product-name"><Link to={`/product/${p.slug}`}>{p.title}</Link></td>
                                                <td className="li-product-price"><span className="amount">₦{p.price}</span></td>
                                                <td className="li-product-stock-status"><span className="in-stock"><h5>{p.quantity < 1 ? "Out of Stock" : "In stock"}</h5></span></td>
                                                <td className="li-product-add-cart"><Link className="add-to-cart-btn" to=""><a onClick={handleAddToCart} disabled={p.quantity < 1}>Add to cart</a></Link></td>
                                            </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
            
            




        </div>
      </div>
    </div>
    </>
  );
};

export default Wishlist;
