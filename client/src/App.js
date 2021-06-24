import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCategories, getAllProducts, getCartItems } from "./actions";
import "./App.css";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import ProductsPage from "./containers/productsPage";
import LandingPage from "./containers/landingPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
    dispatch(getCartItems());
    // eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/products" exact component={ProductsPage} />
      </Switch>
    </div>
  );
}

export default App;
