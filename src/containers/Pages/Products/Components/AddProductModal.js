import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../../../components/UI/Input";
import Modal from "../../../../components/UI/Modal";
import {
  addProduct,
  getProductsByVendor,
} from "../../../../actions/product.action";

import "../styles.css";

const AddProductModal = ({ modalShow, setModalShow }) => {
  const initialState = "";
  const [productName, setProductName] = useState(initialState);
  const [productQuantity, setProductQuantity] = useState(initialState);
  const [productPrice, setProductPrice] = useState(initialState);
  const vendor = useSelector((state) => state.auth.user);

  const [vendorId, setVendorId] = useState(vendor.id);

  const dispatch = useDispatch();

  const createProduct = () => {
    setVendorId(vendor.id);
    const form = new FormData();
    form.append("name", productName);
    form.append("price", productPrice);
    form.append("quantity", productQuantity);
    form.append("vendor", vendorId);

    dispatch(addProduct(form));
    setModalShow(false);
  };

  return (
    <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      heading="Create Product"
      footerbutton="Save"
      buttonOnSave={createProduct}
    >
      <Input
        label="Product Name"
        type="text"
        placeholder={`Enter Product Name`}
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <Input
        label="Product Price"
        type="text"
        placeholder={`Enter Product Price`}
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <Input
        label="Product Quantity"
        type="text"
        placeholder={`Enter Product Quantity`}
        value={productQuantity}
        onChange={(e) => setProductQuantity(e.target.value)}
      />
      <Input
        disabled
        label="Vendor"
        type="text"
        placeholder={`Enter Vendor`}
        value={vendor.username}
        readOnly={true}
      />
    </Modal>
  );
};

export default AddProductModal;
