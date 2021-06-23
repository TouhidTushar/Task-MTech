import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/layout";

function ProductsPage() {
  const products = useSelector((state) => state.product.allProducts);
  return (
    <Layout>
      <div>
        <h1>products page</h1>
        {products.map((item, index) => (
          <div key={index}>
            <img
              src={item.imageRef}
              alt={item.title + "photo"}
              style={{ width: "250px " }}
            />
            <h3>{item.title}</h3>
            <p>
              <b>{item.price}</b>
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default ProductsPage;
