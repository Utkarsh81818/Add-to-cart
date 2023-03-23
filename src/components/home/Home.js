import React, { useEffect } from "react";
import { addToCart, removeFromCart, emptyCart } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../../redux/productAction";
import "../../App.css";

const Home = ({onSetView}) => {
  const data = useSelector((state) => state.productData);
  console.log("data in main component from saga", data);
  const dispatch = useDispatch();

  useEffect(() => {
    onSetView(1)
    dispatch(productList());
  }, []);

  return (
    <div className="parent_container_home">
      <h2 className="heading">Shopping Cart</h2>
      <section className="product">
        <h3>Products</h3>
      </section>
      <button className="emptycart" onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {data.map((item) => (
          <div className="col" id={item.id}>
            <div
              className="card border-2 rounded-3 border-dark shadow-lg "
              style={{ width: "18rem" }}
            >
              <img src={item.thumbnail} alt="" />
              <div className="card-body">
                <h4 className="card-title" style={{ fontWeight: "bold" }}>
                  {item.title}
                </h4>
                <h5>Brand : {item.brand}</h5>
                <h5>Category : {item.category}</h5>
                <h5>Price : {item.price} $</h5>
                <h5>Ratings : {item.rating} stars </h5>
                <h5>Stock : {item.stock}</h5>
                <button onClick={() => dispatch(addToCart(item))}>
                  Add To Cart
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove From Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
