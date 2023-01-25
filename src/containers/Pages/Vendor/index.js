import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "./../../../components/Layout";
import { Col, Row, Button } from "react-bootstrap";
import AllVendorList from "./AllVendorList";

const Vendor = () => {
  const user = useSelector((state) => state.auth.user);
  const vendors = useSelector((state) => state.vendor.vendors);

  return (
    <Layout sidebar name={"Vendors List"}>
      <AllVendorList vendors={vendors} />
    </Layout>
  );
};

export default Vendor;
