import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  const [basketCounter, setBasketCounter] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [headerUserEmail, setHeaderUserEmail] = useState("");

  /* Fetched data */
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error, "Error fetching the products");
      }
    }
    fetchProducts();
  }, []);

  /* basket counter */
  useEffect(() => {
    const totalQuantity = basket.reduce(
      (total, product) => total + product.quantity,
      0
    );
    setBasketCounter(totalQuantity);
  }, [basket]);

  /* Search products */
  const searchProducts = (inputText) => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(inputText.toLowerCase())
    );
    setSearchResults(filteredProducts);
  };

  /* add button */
  const addToBasket = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);

    const existingProductIndex = basket.findIndex(
      (product) => product.id === productId
    );

    if (existingProductIndex !== -1) {
      const updatedBasket = [...basket];
      updatedBasket[existingProductIndex] = {
        ...updatedBasket[existingProductIndex],
        quantity: updatedBasket[existingProductIndex].quantity + 1,
      };
      setBasket(updatedBasket);
    } else {
      setBasket([...basket, { ...productToAdd, quantity: 1 }]);
    }
  };

  /* Delete button */
  const deleteFromBasket = (productId) => {
    const updatedBasket = basket.filter((product) => product.id !== productId);
    setBasket(updatedBasket);
  };

  /* quantity button */
  const quantityIncrease = (productId) => {
    const updatedBasket = basket.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setBasket(updatedBasket);
  };

  /* quantity button */
  const quantityDecrease = (productId) => {
    const existingProductIndex = basket.findIndex(
      (product) => product.id === productId
    );

    if (
      existingProductIndex !== -1 &&
      basket[existingProductIndex].quantity > 1
    ) {
      const updatedBasket = [...basket];
      updatedBasket[existingProductIndex] = {
        ...updatedBasket[existingProductIndex],
        quantity: updatedBasket[existingProductIndex].quantity - 1,
      };
      setBasket(updatedBasket);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        basketCounter,
        basket,
        searchResults,
        headerUserEmail,
        setHeaderUserEmail,
        searchProducts,
        addToBasket,
        deleteFromBasket,
        quantityIncrease,
        quantityDecrease,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
