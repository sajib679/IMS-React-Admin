import React, { useState } from "react";
import Table from "../../../components/UI/Table";
import { Col, Row, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import Layout from "./../../../components/Layout";

const AllPurchaseTable = () => {
  const purchases = useSelector((state) => state.purchase.purchases);

  return (
    <Layout sidebar name={"Purchase History"}>
      <Table
        tableHeadRow={
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Vendor</th>
            <th>Purchase Price</th>
            <th>Purchase Qty</th>
            <th>Purchase Cost</th>
          </tr>
        }
      >
        {purchases.length > 0 &&
          purchases.map((purchase, index) => (
            <tr key={purchase.id}>
              <td>{index + 1}</td>
              <td>{purchase.product.name}</td>
              <td>{purchase.vendor.name}</td>
              <td>{purchase.price}</td>
              <td>{purchase.pur_quantity} </td>
              <td>{purchase.total_price}</td>
            </tr>
          ))}
      </Table>
    </Layout>
  );
};

export default AllPurchaseTable;
