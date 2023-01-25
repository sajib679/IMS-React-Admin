import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import userReducer from "./user.reducers";
import vendorReducer from "./vendor.reducers";
import productReducer from "./product.reducers";
import purchaseReducer from "./purchase.reducers";
import saleReducer from "./sale.reducers";
import inventoryReducer from "./inventory.reducers";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  vendor: vendorReducer,
  product: productReducer,
  purchase: purchaseReducer,
  sale: saleReducer,
  inventory: inventoryReducer,
});

export default rootReducer;
