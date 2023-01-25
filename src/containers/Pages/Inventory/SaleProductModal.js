import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Button } from "react-bootstrap";
import { saleProduct as sale } from "../../../actions";
import Input from "../../../components/UI/Input";
import Modal from "../../../components/UI/Modal";

const SaleProductModal = ({
  modalShowSale,
  setModalShowSale,
  inventoryDetails,
}) => {
  const { product, in_stock, vendor } = inventoryDetails;
  const [productName, setProductName] = useState(product.name);
  const [productQuantity, setProductQuantity] = useState(in_stock);
  const [productPurPrice, setProductPurPrice] = useState(product.price);
  const [productSaleQuantity, setProductSaleQuantity] = useState(0);
  const [vendorName, setVendorName] = useState(vendor.name);
  const [vendorId, setVendorId] = useState(vendor.id);
  const [productSalePrice, setProductSalePrice] = useState(0);

  const dispatch = useDispatch();

  const saleProduct = () => {
    const form = new FormData();
    form.append("price", productSalePrice);
    form.append("sale_quantity", productSaleQuantity);
    form.append("total_price", productSaleQuantity * productSalePrice);
    form.append("product", product.id);
    form.append("vendor", vendorId);

    dispatch(sale(form));

    setModalShowSale(false);
  };

  return (
    <Modal
      show={modalShowSale}
      onHide={() => setModalShowSale(false)}
      heading="Sale Product"
      footerbutton="Confirm Sale"
      buttonOnSave={saleProduct}
    >
      <Col>
        <Row>
          <Col md={6}>
            <strong>Name: </strong> &nbsp;
            <p>{productName}</p>
          </Col>
          <Col md={6}>
            <p>
              <strong>Purchase Price: </strong> &nbsp;
              {productPurPrice}
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <strong>In_Stock Qty: </strong> &nbsp;
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
              label="Enter Sale Quantity"
              type="text"
              value={productSaleQuantity}
              onChange={(e) => setProductSaleQuantity(e.target.value)}
            />
          </Col>

          <Col md={6}>
            <Input
              label="Enter Sale Price"
              type="text"
              value={productSalePrice}
              onChange={(e) => setProductSalePrice(e.target.value)}
            />
          </Col>

          <Col md={6}>
            <Input
              label="Total Price"
              type="text"
              value={productSaleQuantity * productSalePrice}
            />
          </Col>
        </Row>
      </Col>
    </Modal>
  );
};

export default SaleProductModal;

{
  /* <Input label="Product Name" type="text" value={productName} disabled />
      <Input label="Product Price" type="text" value={productSalePrice} disabled />
      <Input
        label="Product Quantity"
        type="text"
        value={productQuantity}
        disabled
      />
      <Input disabled label="Vendor" type="text" value={vendorName} />
      <Input
        label="Sale Quantity"
        type="text"
        value={productSaleQuantity}
        onChange={(e) => setProductSaleQuantity(e.target.value)}
      />
      <Input
        disabled
        label="Total Price"
        type="text"
        value={productSaleQuantity * productSalePrice}
        onChange={(e) => setTotalSalePrice(e.target.value)}
      /> */
}
