import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartData = useSelector((state) => state.cartData);
  let amount =
    cartData.length &&
    cartData.map((item) => item.price).reduce((prev, next) => prev + next);

  return (
    <div>
      <Link className="cartHome" to="/home">
        Go Back To Home
      </Link>
      <div className="heading_cart">
        <h1>Cart</h1>
      </div>

      <div className="cart_table">
        <table>
          <tr className="table-row">
            <th>Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
            <th>Ratings</th>
            <th>Stock</th>
          </tr>
          {cartData.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.brand}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>{item.rating}</td>
              <td>{item.stock}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="price-details">
      <div className="arjust_price">
        <span className="key">Amount</span>
        <span className="value">{amount} $</span>
      </div>
      <div className="arjust_price">
        <span className="key">Discount</span>
        <span className="value">{amount / 10} $</span>
      </div>
      <div className="arjust_price back">
        <span className="key">Total</span>
        <span className="value">{amount - (amount / 10)} $</span>
      </div>
    </div>
    </div>
  );
};

export default Cart;
