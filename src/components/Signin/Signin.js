import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Signin.css";

const Signin = ({onSetView}) => {
  const navigate = useNavigate();
  const notify = () => toast("User login successfully!", {
    position: toast.POSITION.TOP_CENTER
  });
  const notifyError = () => toast("Invalid Credentials!", {
    position: toast.POSITION.TOP_CENTER
  });
  const notifyEmailErrorOne = () => toast("Email Field is Required!",  {
    position: toast.POSITION.TOP_CENTER
  });
  const notifyEmailErrorTwo = () => toast("Please enter a valid email address!", {
    position: toast.POSITION.TOP_CENTER
  });
  const passwordErrorOne = () => toast("Password Field is Required!", {
    position: toast.POSITION.TOP_CENTER
  });
  const passwordErrorTwo = () => toast("Password length should be greater then 5", {
    position: toast.POSITION.TOP_CENTER
  });
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({...data, [name]:value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const getUserData = localStorage.getItem('registration')

    const {email, password} = data;
      if(email === ""){
        notifyEmailErrorOne()
      }else if(!email.includes("@")){
        notifyEmailErrorTwo()
      }else if(password === ""){
        passwordErrorOne()
      }else if(password.length < 5){
        passwordErrorTwo()
      }
      else {
    if(getUserData && getUserData.length){
        const userData = JSON.parse(getUserData);
        const userLogin = userData.filter((res, key) => {
            return res.email === email && res.password === password
        });
        if(userLogin.length === 0){
            notifyError()
        }
        else{
          localStorage.setItem('user_login', JSON.stringify(getUserData))
            notify()
            onSetView(1)
            navigate('/home')
        }
    }
  }
}

  return (
    <div className="container_signin">
      <form className="form_container_signin" action="" onSubmit={handleSubmit}>
        <div className="form-header-signin">
          <h1>Sign In</h1>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            autoComplete="off"
            name="email"
            value={data.email}
            onChange={handleChangeInput}
            
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            autoComplete="off"
            name="password"
            value={data.password}
            onChange={handleChangeInput}    
            
          />
        </div>
        <div className="mb-3 form-check">
          <label className="form-check-label" for="exampleCheck1">
            <Link to="/" className="accountcolor">
              Create an account
            </Link>
          </label>
        </div>
        <div className="d-grid gap-2 col-16 mx-auto button">
          <button type="submit" className="btn btn-info btn-lg">
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signin;
