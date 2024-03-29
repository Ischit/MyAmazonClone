import React from "react";
import "./Header.css";
import { Search, ShoppingBasket } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useStateValue } from "./Stateprovider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to={"/"}>
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon_logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <Search className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"} style={{ textDecoration: "none" }}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              {user?.email ? `Hello ${user.email}` : "Hello Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Log Out" : "Sign in"}
            </span>
          </div>
        </Link>
        <Link to={"/orders"}>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to={"/checkout"} style={{ textDecoration: "none" }}>
          <div className="header__optionBasket">
            <ShoppingBasket />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
