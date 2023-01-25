import React, { useState } from "react";
import Table from "../../../components/UI/Table";
import { Col, Row, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import Layout from "./../../../components/Layout";

const AllSaleTable = () => {
  const sales = useSelector((state) => state.sale.sales);

  return (
    <Layout sidebar name={"Sale History"}>
      <Table
        tableHeadRow={
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Vendor</th>
            <th>Sale Price</th>
            <th>Sale Qty</th>
            <th>Sale Cost</th>
          </tr>
        }
      >
        {sales.length > 0 &&
          sales.map((sale, index) => (
            <tr key={sale.id}>
              <td>{index + 1}</td>
              <td>{sale.product.name}</td>
              <td>{sale.vendor.name}</td>
              <td>{sale.price}</td>
              <td>{sale.sale_quantity} </td>
              <td>{sale.total_price}</td>
            </tr>
          ))}
      </Table>
    </Layout>
  );
};

export default AllSaleTable;
