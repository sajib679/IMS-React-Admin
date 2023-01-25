import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "./../../../components/Layout";
import { Col, Row, Button } from "react-bootstrap";
import { getProductsByVendor } from "../../../actions/product.action";
import AllProductTable from "./Components/AllProductTable";
import UpdateProductModal from "./Components/UpdateProductModal";
import ProductDetails from "./Components/ProductDetails";
import AddProductModal from "./Components/AddProductModal";
import PurchaseProductModal from "./Components/PurchaseProductModal";

const Products = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalShowPD, setModalShowPD] = useState(false);
  const [modalShowPU, setModalShowPU] = useState(false);
  const [modalShowPUR, setModalShowPUR] = useState(false);

  const [productDetails, setProductDetails] = useState({});
  const user = useSelector((state) => state.auth.user);
  const products = useSelector((state) => state.product.products);

  const ShowProductDetails = (params) => {
    setModalShowPD(true);
    setProductDetails(params);
  };

  const ShowProductUpModal = (params) => {
    console.log(params);
    setModalShowPU(true);
    setProductDetails(params);
  };

  const ShowProductPurModal = (params) => {
    console.log(params);
    setModalShowPUR(true);
    setProductDetails(params);
  };

  return (
    <Layout
      sidebar
      button
      name={user.isVendor ? `Vendor Name: ${user.username}` : "Products List"}
      buttonAdd="Create"
      addOnClick={() => setModalShow(true)}
    >
      {
        <AllProductTable
          products={products}
          ShowProductDetails={ShowProductDetails}
          ShowProductUpModal={ShowProductUpModal}
          ShowProductPurModal={ShowProductPurModal}
        />
      }
      {modalShow ? (
        <AddProductModal modalShow={modalShow} setModalShow={setModalShow} />
      ) : null}
      {modalShowPD ? (
        <ProductDetails
          modalShowPD={modalShowPD}
          productDetails={productDetails}
          setModalShowPD={setModalShowPD}
        />
      ) : null}
      {modalShowPU ? (
        <UpdateProductModal
          modalShowPU={modalShowPU}
          productDetails={productDetails}
          setModalShowPU={setModalShowPU}
        />
      ) : null}

      {modalShowPUR ? (
        <PurchaseProductModal
          modalShowPUR={modalShowPUR}
          productDetails={productDetails}
          setModalShowPUR={setModalShowPUR}
        />
      ) : null}
    </Layout>
  );
};

export default Products;
