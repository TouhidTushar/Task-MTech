import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/card";
import Layout from "../../components/layout";
import "./style.css";

function ProductsPage() {
  const products = useSelector((state) => state.product.allProducts);
  const categories = useSelector((state) => state.product.allCategories);
  return (
    <Layout>
      <div className="productPageWrapper">
        <p className="directory">products {">"} new arrivals</p>
        <h1>new arrivals</h1>
        <div className="productControls">
          <div className="filters">
            {categories.map((item, index) => (
              <button key={index}>{item.category}</button>
            ))}
          </div>
          <div className="viewControls">
            <button>
              <i className="fas fa-th"></i>
            </button>
            <button>
              <i className="fas fa-list-ul"></i>
            </button>
          </div>
        </div>
        <div className="productShowcase">
          {products.map((item, index) => (
            <Card key={index} data={item}></Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default ProductsPage;
