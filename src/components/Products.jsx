import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

const Products = () => {
  const { products, addToBasket, searchResults } = useContext(ProductsContext);

  return (
    <>
      {searchResults.length > 0 ? (
        <ul className="products_container">
          {searchResults.map((product) => (
            <li className="products_item" key={product.id}>
              <img
                src={product.images[0]}
                alt={product.title}
                className="products_image"
              />
              <h3 className="product_title">{product.title}</h3>
              <p className="product_price">Price: {product.price} €</p>
              <button
                onClick={() => addToBasket(product.id)}
                className="product_button"
              >
                Add to Basket
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="products_container">
          {products.map((product) => (
            <li className="products_item" key={product.id}>
              <img
                src={product.images[0]}
                alt={product.title}
                className="products_image"
              />
              <h3 className="product_title">{product.title}</h3>
              <p className="product_price">Price: {product.price} €</p>
              <button
                onClick={() => addToBasket(product.id)}
                className="product_button"
              >
                Add to Basket
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Products;
