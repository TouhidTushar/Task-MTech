import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import ProductsPage from "./containers/productsPage";
import LandingPage from "./containers/landingPage";
import {
  getAllCategories,
  getAllProducts,
  getCartItems,
  getOrderHistory,
} from "./actions";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
    dispatch(getCartItems());
    dispatch(getOrderHistory());
    // eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/products" component={ProductsPage} />
      </Switch>
    </div>
  );
}

export default App;
