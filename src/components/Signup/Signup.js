import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Signup.css";

const Signup = () => {

  const navigate = useNavigate();

  const notifyFirstNameErrorOne = () => toast("First Name Field is Required!",  {
    position: toast.POSITION.TOP_CENTER
  });
  const notifyFirstNameErrorTwo = () => toast("First Name should be atleast 3 characters",  {
    position: toast.POSITION.TOP_CENTER
  });
  const notifyLastNameErrorOne = () => toast("Last Name Field is Required!",  {
    position: toast.POSITION.TOP_CENTER
  });
  const notifyLastNameErrorTwo = () => toast("Last Name should be atleast 3 characters",  {
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
  const notify = () => toast("User Registration is Successful!", {
    position: toast.POSITION.TOP_CENTER
  });

  const [details, setDetails] = useState({
    firstName:'',
    lastName:'',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails({...details, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const {firstName, lastName, email, password} = details;
    if(firstName === ""){
      notifyFirstNameErrorOne()
    }else if(firstName.length < 3){
      notifyFirstNameErrorTwo()
    }else if(lastName === ""){
      notifyLastNameErrorOne()
    }else if(lastName.length < 3){
      notifyLastNameErrorTwo()
    }else if(email === ""){
      notifyEmailErrorOne()
    }else if(!email.includes("@")){
      notifyEmailErrorTwo()
    }else if(password === ""){
      passwordErrorOne()
    }else if(password.length < 5){
      passwordErrorTwo()
    }else {
    const newRegistration = {...details}
    localStorage.setItem('registration', JSON.stringify([newRegistration]))
    notify()
    navigate('/signin')
  }
}

  return (
    <div className="container">
      <form className="form_container" action="" onSubmit={handleSubmit}>
        <div className="form-header">
          <h1>Sign Up</h1>
        </div>
        <div className="mb-3">
          <label for="exampleInputFirstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputFirstName"
            aria-describedby="firstName"
            autoComplete="off"
            name='firstName'
            value={details.firstName}
            onChange={handleChange}
            
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputLastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputLastName"
            aria-describedby="lastName"
            autoComplete="off"
            name='lastName'
            value={details.lastName}
            onChange={handleChange}
            
          />
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
            name='email'
            value={details.email}
            onChange={handleChange} 
            
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
            name='password'
            value={details.password}
            onChange={handleChange}
            
          />
        </div>

        <div className="mb-3 form-check">
          <Link to="/signin" className="accountcolor">
            I am already register
          </Link>
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

export default Signup;
