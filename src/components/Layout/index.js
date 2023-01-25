import React from "react";
import { Button, Col, Container, Jumbotron, Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Header from "../Header/index";
import { useDispatch, useSelector } from "react-redux";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";

import "./style.css";

const Layout = (props) => {
  const isVendor = useSelector((state) => state.auth.user.isVendor);

  const superUserMenu = (params) => {
    return (
      <>
        <NavLink to="/vendor">Vendor</NavLink>
        <NavLink to="/purchase">Purchase</NavLink>
        <NavLink to="/sale">Sale</NavLink>
        <NavLink to="/inventory">Inventory</NavLink>
      </>
    );
  };

  return (
    <>
      <Container fluid>
        <Header />
        <Container fluid>
          {props.sidebar ? (
            <Row>
              <Col md={2} className="bg bg-light sidebar">
                <Nav className="flex-column">
                  <NavLink to="/product">Product</NavLink>
                  {isVendor ? null : superUserMenu()}
                </Nav>
              </Col>
              <Col md={10} className="content-bar">
                <Jumbotron className="py-3 px-4">
                  <Row className="d-flex justify-content-center pb-3">
                    <h1>{props.name}</h1>
                  </Row>
                  {props.button && (
                    <Row className="d-flex justify-content-between">
                      {props.buttonAdd && (
                        <Button variant="info" onClick={props.addOnClick}>
                          {props.buttonAdd}
                          <span>
                            <MdAdd />
                          </span>
                        </Button>
                      )}
                      {props.buttonEdit && (
                        <Button variant="warning" onClick={props.editOnClick}>
                          {props.buttonEdit}
                          <span>
                            <MdEdit />
                          </span>
                        </Button>
                      )}
                      {props.buttonDelete && (
                        <Button variant="danger" onClick={props.deleteOnClick}>
                          {props.buttonDelete}
                          <span>
                            <MdDelete />
                          </span>
                        </Button>
                      )}
                    </Row>
                  )}
                </Jumbotron>
                {props.children}
              </Col>
            </Row>
          ) : (
            props.children
          )}
        </Container>
      </Container>
    </>
  );
};

export default Layout;
