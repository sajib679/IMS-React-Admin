import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/HOC/PrivateRoutes";
import SignIn from "./containers/Pages/SignIn/index";
import SignUp from "./containers/Pages/SignUp/index";
import Home from "./containers/Pages/Home";
import Vendor from "./containers/Pages/Vendor";
import Products from "./containers/Pages/Products";
import Inventory from "./containers/Pages/Inventory";
import Purchase from "./containers/Pages/Purchase";
import Sale from "./containers/Pages/Sale";

import { useDispatch, useSelector } from "react-redux";
import { getInitialData, isUserLoggedIn, getProductsByVendor } from "./actions";

function App() {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    if (auth.isVendor) {
      dispatch(getProductsByVendor(auth.user.id));
    }
    if (auth.isSuperuser) {
      dispatch(getInitialData());
    }
  }, [auth.authenticate, auth.isVendor, auth.isSuperuser]);

  return (
    <Switch>
      <PrivateRoute path="/" exact component={Home}></PrivateRoute>
      <PrivateRoute path="/product" component={Products}></PrivateRoute>
      <PrivateRoute path="/vendor" component={Vendor}></PrivateRoute>
      <PrivateRoute path="/inventory" component={Inventory}></PrivateRoute>
      <PrivateRoute path="/purchase" component={Purchase}></PrivateRoute>
      <PrivateRoute path="/sale" component={Sale}></PrivateRoute>
      <Route path="/signin" component={SignIn}></Route>
      <Route path="/signup" component={SignUp}></Route>
    </Switch>
  );
}

export default App;
