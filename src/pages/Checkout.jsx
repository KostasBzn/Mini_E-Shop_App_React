import Header from "../components/Header";
import { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";

const Checkout = () => {
  const { basket, deleteFromBasket, quantityIncrease, quantityDecrease } =
    useContext(ProductsContext);

  const totalSum = basket.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  console.log(basket);

  return (
    <>
      <Header />

      {basket.length > 0 ? (
        <div>
          {" "}
          <ul className="basket_container">
            {basket.map((product) => (
              <li className="basket_item" key={product.id}>
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="basket_image"
                />
                <h3 className="basket_title">{product.title}</h3>
                <p className="basket_price">
                  Price: {product.price}€ x {product.quantity}
                </p>
                <div className="basket_buttons-container">
                  <button
                    onClick={() => deleteFromBasket(product.id)}
                    className="basket_delete-button"
                  >
                    Delete
                  </button>
                  <div className="basket_quantity">
                    <button onClick={() => quantityDecrease(product.id)}>
                      -
                    </button>
                    <p className="basket_item-quamtity">{product.quantity}</p>
                    <button onClick={() => quantityIncrease(product.id)}>
                      +
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="basket_sum">
            <h2>
              Total: <span>{totalSum} €</span>
            </h2>
          </div>{" "}
        </div>
      ) : (
        <p className="basket_empty">Your basket is empty</p>
      )}
    </>
  );
};

export default Checkout;
