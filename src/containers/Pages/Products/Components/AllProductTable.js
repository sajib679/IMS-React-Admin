import React, { useState } from "react";
import Table from "../../../../components/UI/Table";
import { Col, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../../../actions/product.action";

import "../styles.css";

const AllProductTable = ({
  products,
  ShowProductUpModal,
  ShowProductPurModal,
}) => {
  const dispatch = useDispatch();
  const isVendor = useSelector((state) => state.auth.user.isVendor);

  return (
    <Table
      tableHeadRow={
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Vendor</th>
          <th>Action</th>
        </tr>
      }
    >
      {products.length > 0 &&
        products.map((product, index) => (
          <tr key={product.id}>
            <td>{index + 1}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity} </td>
            <td>{product.vendor.name}</td>
            <td>
              <Row className="justify-content-md-around m-auto ">
                {isVendor ? (
                  <>
                    <Button
                      className="mt-sm-1 mt-lg-0"
                      size="sm"
                      variant="outline-info"
                      onClick={() => ShowProductUpModal(product)}
                    >
                      Edit
                    </Button>
                    <Button
                      className="mb-sm-1 mb-lg-0"
                      size="sm"
                      variant="danger"
                      onClick={() => dispatch(deleteProduct(product.id))}
                    >
                      Delete
                    </Button>
                  </>
                ) : (
                  <Button
                    className="mt-sm-1 mt-lg-0"
                    size="sm"
                    variant="info"
                    onClick={() => ShowProductPurModal(product)}
                  >
                    Add to Inventory
                  </Button>
                )}
              </Row>
            </td>
          </tr>
        ))}
    </Table>
  );
};

export default AllProductTable;
