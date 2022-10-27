import { combineReducers } from "redux";
import { productReducer ,selectedProductReducer,reducerFn} from "./productReducer";
const reducers=combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer,
    red:reducerFn
})
export default reducers;