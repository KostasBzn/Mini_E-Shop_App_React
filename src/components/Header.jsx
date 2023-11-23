import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";

const Header = () => {
  const { basketCounter, searchProducts, headerUserEmail } =
    useContext(ProductsContext);
  const [inputText, setInputText] = useState("");

  const handleSearch = () => {
    searchProducts(inputText);
    setInputText("");
  };

  return (
    <>
      <nav className="header">
        <Link to={"/homepage/"}>
          <img
            className="header_logo"
            src="https://www.shutterstock.com/image-vector/vector-logo-eshop-isolated-on-260nw-1779825959.jpg"
            alt="logo"
          />
        </Link>

        <div className="header_search-bar">
          <input
            placeholder="Search..."
            type="text"
            className="header_search-input"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <SearchIcon onClick={handleSearch} className="header_search-icon" />
        </div>
        <div className="header_links">
          <Link to={"/"} className="header_link">
            <div className="header_options">
              <span className="option_user">
                Hello {headerUserEmail.split("@")[0]}
              </span>
              <span className="option_sign">Sign out</span>
            </div>
          </Link>

          {/* Basket Icon */}
          <Link to={"/checkout"} className="header_basket">
            <div className="header_cheackout-basket">
              <ShoppingCartIcon className="header_shopping-cart" />
              {/* Number of items */}
              {basketCounter !== 0 ? (
                <span className="header_basket-count"> ({basketCounter}) </span>
              ) : (
                ""
              )}
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
