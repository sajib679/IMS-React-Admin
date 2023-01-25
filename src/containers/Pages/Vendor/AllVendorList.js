import React, { useState } from "react";
import Table from "../../../components/UI/Table";
import { Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const AllVendorList = ({ vendors }) => {
  return (
    <Table
      tableHeadRow={
        <tr>
          <th>#</th>
          <th>Vendor Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      }
    >
      {vendors.length > 0 &&
        vendors.map((vendor, index) => (
          <tr key={vendor.id}>
            <td>{index + 1}</td>
            <td>{vendor.username}</td>
            <td>{vendor.email}</td>

            {/* <td>
              <Row className="justify-content-md-around m-auto ">
                <Button
                  className="mt-sm-1 mt-lg-0"
                  size="sm"
                  variant="outline-warning"
                  onClick={() => ShowProductUpModal(vendor)}
                >
                  Edit
                </Button>
                <Button
                  className="mb-sm-1 mb-lg-0"
                  size="sm"
                  variant="outline-info"
                  onClick={() => dispatch(deleteProduct(vendor.id))}
                >
                  Delete
                </Button>
              </Row>
            </td> */}
          </tr>
        ))}
    </Table>
  );
};

export default AllVendorList;
