import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Button } from "react-bootstrap";
import { purchaseProduct as purchase } from "../../../../actions";
import Input from "../../../../components/UI/Input";
import Modal from "../../../../components/UI/Modal";

const PurchaseProductModal = ({
  modalShowPUR,
  setModalShowPUR,
  productDetails,
}) => {
  const { id, name, price, quantity, vendor } = productDetails;

  const [productName, setProductName] = useState(name);
  const [productQuantity, setProductQuantity] = useState(quantity);
  const [productPurQuantity, setProductPurQuantity] = useState(0);
  const [totalPurPrice, setTotalPurPrice] = useState(0);
  const [productPrice, setProductPrice] = useState(price);
  const [vendorName, setVendorName] = useState(vendor.name);
  const [vendorId, setVendorId] = useState(vendor.id);

  const dispatch = useDispatch();

  const purchaseProduct = () => {
    const form = new FormData();
    form.append("price", productPrice);
    form.append("pur_quantity", productPurQuantity);
    form.append("total_price", productPurQuantity * productPrice);
    form.append("product", id);
    form.append("vendor", vendorId);

    dispatch(purchase(form));

    setModalShowPUR(false);
  };

  return (
    <Modal
      show={modalShowPUR}
      onHide={() => setModalShowPUR(false)}
      heading="Purchase Product"
      footerbutton="Confirm Purchase"
      buttonOnSave={purchaseProduct}
    >
      <Col>
        <Row>
          <Col md={6}>
            <strong>Name: </strong> &nbsp;
            <p>{productName}</p>
          </Col>
          <Col md={6}>
            <p>
              <strong>Price: </strong> &nbsp;
              {productPrice}
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <strong>Quantity: </strong> &nbsp;
            <p>{productQuantity}</p>
          </Col>

          <Col md={6}>
            <strong>Vendor: </strong> &nbsp;
            <p>{vendorName}</p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Input
              label="Enter Purchase Quantity"
              type="text"
              value={productPurQuantity}
              onChange={(e) => setProductPurQuantity(e.target.value)}
            />
          </Col>

          <Col md={6}>
            <Input
              label="Total Price"
              type="text"
              value={productPurQuantity * productPrice}
            />
          </Col>
        </Row>
      </Col>
    </Modal>
  );
};

export default PurchaseProductModal;

{
  /* <Input label="Product Name" type="text" value={productName} disabled />
      <Input label="Product Price" type="text" value={productPrice} disabled />
      <Input
        label="Product Quantity"
        type="text"
        value={productQuantity}
        disabled
      />
      <Input disabled label="Vendor" type="text" value={vendorName} />
      <Input
        label="Purchase Quantity"
        type="text"
        value={productPurQuantity}
        onChange={(e) => setProductPurQuantity(e.target.value)}
      />
      <Input
        disabled
        label="Total Price"
        type="text"
        value={productPurQuantity * productPrice}
        onChange={(e) => setTotalPurPrice(e.target.value)}
      /> */
}
