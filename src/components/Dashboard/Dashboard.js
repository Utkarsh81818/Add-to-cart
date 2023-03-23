import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = ({ onSetView }) => {
  const result = useSelector((state) => state.cartData);
  console.warn("result", result);

  const notifyLogout = () =>
    toast("User logout successfully!", {
      position: toast.POSITION.TOP_CENTER,
    });

  const history = useNavigate();

  localStorage.getItem("user_login");
  const logoutButton = () => {
    notifyLogout();
    localStorage.clear();
    onSetView(0);
    history("/signin");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand"  href={() => false}>
            Assignment
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/home"
                  className="nav-link active head_dashboard"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto head">
              <li className="nav-item">
                <Link className="nav-link active ms-auto" to="/cart">
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active ms-auto">
                  Cart Items : {result.length}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link ms-auto active"
                  onClick={logoutButton}
                  to="/"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
