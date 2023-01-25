import React, { useState } from "react";
import Table from "../../../components/UI/Table";
import { Col, Row, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import Layout from "./../../../components/Layout";
import SaleProductModal from "./SaleProductModal";

const AllInventoryTable = () => {
  const inventories = useSelector((state) => state.inventory.inventories);

  const [modalShowSale, setModalShowSale] = useState(false);
  const [inventoryDetails, setInventoryDetails] = useState({});

  const ShowProductSaleModal = (params) => {
    console.log(params);
    setModalShowSale(true);
    setInventoryDetails(params);
  };

  return (
    <Layout sidebar name={"Inventories"}>
      <>
        {modalShowSale ? (
          <SaleProductModal
            modalShowSale={modalShowSale}
            setModalShowSale={setModalShowSale}
            inventoryDetails={inventoryDetails}
          />
        ) : null}
        <Table
          tableHeadRow={
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Vendor</th>
              <th>Pur Price</th>
              <th>Total Purchase Qty</th>
              <th>Total Purchase Cost</th>
              <th>Total Sale Qty</th>
              <th>Total Sale Earn</th>
              <th>In Stock</th>
              <th>Action</th>
            </tr>
          }
        >
          {inventories.length > 0 &&
            inventories.map((inventory, index) => (
              <tr key={inventory.id}>
                <td>{index + 1}</td>
                <td>{inventory.product.name}</td>
                <td>{inventory.vendor.name}</td>
                <td>{inventory.product.price}</td>
                <td>{inventory.total_pur_quantity} </td>
                <td>{inventory.total_pur_price}</td>
                <td>{inventory.total_sale_quantity} </td>
                <td>{inventory.total_sale_price}</td>
                <td>{inventory.in_stock}</td>
                <td>
                  <Row className="justify-content-md-around m-auto ">
                    <Button
                      className="mt-sm-1 mt-lg-0"
                      size="sm"
                      variant="outline-warning"
                      onClick={() => ShowProductSaleModal(inventory)}
                    >
                      Sale
                    </Button>
                  </Row>
                </td>
              </tr>
            ))}
        </Table>
      </>
    </Layout>
  );
};

export default AllInventoryTable;
