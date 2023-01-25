import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Layout from "../../../components/Layout/index";
import { useDispatch, useSelector } from "react-redux";
import {
  getInitialData,
  isUserLoggedIn,
  getProductsByVendor,
} from "../../../actions";
const Home = () => {
  // const auth = useSelector((state) => state.auth);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!auth.authenticate) {
  //     dispatch(isUserLoggedIn());
  //   }
  //   if (auth.authenticate && auth.user.isVendor) {
  //     dispatch(getProductsByVendor(auth.user.id));
  //   }
  //   if (auth.authenticate && auth.user.isSuperuser) {
  //     dispatch(getInitialData());
  //   }
  // }, [auth.authenticate]);
  return (
    <Container fluid>
      <Layout sidebar></Layout>
    </Container>
  );
};

export default Home;
