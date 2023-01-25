import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Button } from "react-bootstrap";
import { updateProduct as update } from "../../../../actions";
import Input from "../../../../components/UI/Input";
import Modal from "../../../../components/UI/Modal";

const UpdateProductModal = ({
  modalShowPU,
  setModalShowPU,
  productDetails,
}) => {
  const { id, name, price, quantity, vendor } = productDetails;

  useEffect(() => {}, []);

  const [productName, setProductName] = useState(name);
  const [productQuantity, setProductQuantity] = useState(quantity);
  const [productPrice, setProductPrice] = useState(price);
  const [vendorName, setVendorName] = useState(vendor.name);
  const [vendorId, setVendorId] = useState(vendor.id);

  const dispatch = useDispatch();

  const updateProduct = () => {
    const form = new FormData();
    form.append("name", productName);
    form.append("price", productPrice);
    form.append("quantity", productQuantity);

    dispatch(update({ id, form }));

    setModalShowPU(false);
  };

  return (
    <Modal
      show={modalShowPU}
      onHide={() => setModalShowPU(false)}
      heading="Update Product"
      footerbutton="save"
      buttonOnSave={updateProduct}
    >
      <Input
        label="Product Name"
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <Input
        label="Product Price"
        type="text"
        value={productPrice}
        onChange={(e) => {
          setProductPrice(e.target.value);
          console.log(productPrice);
        }}
      />
      <Input
        label="Product Quantity"
        type="text"
        value={productQuantity}
        onChange={(e) => setProductQuantity(e.target.value)}
      />
      <Input disabled label="Vendor" type="text" value={vendorName} />
    </Modal>
  );
};

export default UpdateProductModal;
