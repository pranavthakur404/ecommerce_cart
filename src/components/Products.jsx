import React from "react";
import useFetch from "../hooks/useFetch";
import Product from "./Product";
import styles from "../component_css/Products.module.css";

function Products() {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className={styles.products}>
      {data &&
        data.map((singleData) => {
          return <Product key={singleData.id} {...singleData} />;
        })}
    </div>
  );
}

export default Products;
