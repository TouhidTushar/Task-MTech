import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../components/card";
import Layout from "../../components/layout";
import "./style.css";

function ProductsPage() {
  const products = useSelector((state) => state.product.allProducts);
  const categories = useSelector((state) => state.product.allCategories);
  const [activeCategory, setActiveCategory] = useState("all");
  const [showcase, setShowcase] = useState(products);

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
          {/* <div className="viewControls">
            <button>
              <i className="fas fa-th"></i>
            </button>
            <button>
              <i className="fas fa-list-ul"></i>
            </button>
          </div> */}
        </div>
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
