import React, { useState } from "react";
import { Form, Button, Row, Col, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signup } from "../../../actions";
import Layout from "../../../components/Layout/index";
import Input from "../../../components/UI/Input/index";

const SignUp = () => {
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);

  const initialState = "";
  const [username, setUsername] = useState(initialState);
  const [email, setEmail] = useState(initialState);
  const [password, setPassword] = useState(initialState);
  const [error, setError] = useState(initialState);
  const dispatch = useDispatch();

  const userSignup = (e) => {
    e.preventDefault();
    const user = {
      username,
      email,
      password,
    };
    dispatch(signup(user));
  };
  if (auth.authenticate) {
    return <Redirect to={"/"} />;
  }

  if (user.loading) {
    return (
      <div className=" justify-content-center ">
        <>
          <Spinner animation="grow" />
          <Spinner animation="border" variant="primary" />
          <Spinner animation="border" variant="warning" />
          <Spinner animation="border" variant="info" />
        </>
      </div>
    );
  }

  if (user.succes) {
    return <Redirect to={"/signin"} />;
  }

  return (
    <Layout>
      <Row style={{ marginTop: 50 }}>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={userSignup}>
            <Input
              label="Vendor Name"
              type="text"
              placeholder="Enter Vendor Name"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <Input
              label="Email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default SignUp;
