import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/layout";
import Card from "../../components/card";
import "./style.css";

function ProductsPage() {
  const products = useSelector((state) => state.product.allProducts);
  const categories = useSelector((state) => state.product.allCategories);
  const [activeCategory, setActiveCategory] = useState("all");
  const [showcase, setShowcase] = useState(products);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    setShowcase(products);
  }, [products]);

  useEffect(() => {
    if (activeCategory !== "all") {
      var newArray = [];
      for (let item of products) {
        if (item.category === activeCategory) {
          newArray.push(item);
        }
      }
      setShowcase(newArray);
    } else {
      setShowcase(products);
    }
    // eslint-disable-next-line
  }, [activeCategory]);

  return (
    <Layout>
      <div className="productPageWrapper">
        <p className="directory">products {">"} new arrivals</p>
        <h1>new arrivals</h1>

        {/* filter-control-bar */}
        {categories.length > 0 ? (
          <div className="productControls">
            <div className="filters">
              {categories.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(item.category)}
                  className={
                    activeCategory === item.category
                      ? "filterBtnActive"
                      : "filterBtn"
                  }
                >
                  {item.category}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {/* product-showcase */}
        <div className="productShowcase">
          {showcase.map((item, index) => (
            <Card key={index} data={item}></Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default ProductsPage;
