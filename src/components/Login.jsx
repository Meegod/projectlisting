import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import  authContext from "../context/AuthContext";
import { useContext } from "react";
import { signIn } from "../context/firbaseCrud";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const{setUser}=useContext(authContext);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    signIn(email, password) .then(userCredential => {
      setUser({...userCredential})
      navigate("/");
    }).catch((e) =>  setError(err.message));
    
  };


  return (
    <>
      <div className="p-4  mt-20 box container col-md-6">
        <h2 className="mb-3 text-white text-center">User Auth Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit" className="">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          {/* <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          /> */}
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        {/* Don't have an account?Sign up<Link to="/signup"></Link> */}
      </div>
    </>
  );
};

export default Login;
