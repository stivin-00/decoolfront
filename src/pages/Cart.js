import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductCardInCheckout from "../components/cards/ProductCardInCheckout";
import { userCart } from "../functions/user";

const Cart = ({ history }) => {
  const { cart, user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const getTotal = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  const saveOrderToDb = () => {
    // console.log("cart", JSON.stringify(cart, null, 4));
    userCart(cart, user.token)
      .then((res) => {
        console.log("CART POST RES", res);
        if (res.data.ok) history.push("/checkout");
      })
      .catch((err) => console.log("cart save err", err));
  };

    const saveCashOrderToDb = () => {
    // console.log("cart", JSON.stringify(cart, null, 4));
    dispatch({
      type: "COD",
      payload: true,
    });
    userCart(cart, user.token)
      .then((res) => {
        console.log("CART POST RES", res);
        if (res.data.ok) history.push("/checkout");
      })
      .catch((err) => console.log("cart save err", err));
  };

  const showCartItems = () => (


      <div className="row">
        <div className="col-12">
            <form action="#">
                <div className="table-content table-responsive">
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th className="li-product-thumbnail">Images</th>
                                <th className="cart-product-name">Title</th>
                                <th className="li-product-price">Price</th>
                                <th className="li-product-stock-status">Brand</th>
                                <th className="li-product-add-cart">Color</th>
                                <th className="li-li-product-price">Count</th>
                                <th className="li-product-price">Shipping</th>
                                <th className="li-product-price">Remove</th>
                            </tr>
                        </thead>

                              {cart.map((p) => (
                                <ProductCardInCheckout key={p._id} p={p} />
                              ))}

                    </table>
                </div>
            </form>
        </div>
      </div>

 
  );

  return (
    <div className="container-fluid pt-2">
      <div className="row">
        <div className="col-md-8">
          <h2 style={{ marginTop : "8px", justifySelf: "centre"}}>Cart / {cart.length} Product</h2>

          {!cart.length ? (
            <p className='text-danger'>
              No products in cart. <Link to="/shop">Continue Shopping.</Link>
            </p>
          ) : (
            showCartItems()
          )}
        </div>
        <div className="col-md-4" style={{ marginTop : "8px", border: "0.5px solid black", borderRadius: "4px"}}>
          <h3>Order Summary</h3>
          <hr />
          <h4>Products</h4>
          {cart.map((c, i) => (
            <div key={i}>
              <p style={{fontWeight: "400"}}>
                {c.title} x {c.count} = ${c.price * c.count}
              </p>
              <hr />
            </div>
          ))}
          <hr />
          <span><h4>Total: ${getTotal()}</h4></span>
          <hr />
          {user ? (
            <>
              <button
                onClick={saveOrderToDb}
                className="btn btn-primary mt-2 primary-btn"
                disabled={!cart.length}
              >
                Proceed to Checkout
              </button>
              <br />
              <button
                onClick={saveCashOrderToDb}
                className="btn btn-warning mt-2 primary-btn"
                disabled={!cart.length}
              >
                Pay Cash on Delivery
              </button>
            </>
          ) : (
            <button className="btn btn-primary mt-2 ">
              <Link
                to={{
                  pathname: "/login",
                  state: { from: "cart" },
                }}
              >
                Login to Checkout
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
