import { Home } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useContext, useRef, useState } from "react";
import { MyContext } from "../../App";
// import store from "../redux/store";

const Header = () => {
  const allProducts = useSelector((state) => state.allProducts);
  // console.log("header", allProducts.data);
  const products = allProducts.data;
  const searchElm = useRef();
  const [searchTerm, setSearchTerm] = useState("");
  const { searchResult, setSearchResult } = useContext(MyContext);
  // console.log("test", useContext(MyContext));

  const searchHandler = (e) => {
    e.preventDefault();
    setSearchTerm(searchElm.current.value);
    console.log(searchElm.current.value);
    const newProductList = products.filter((product) => {
      // console.log(Object.values(product).join(" "));
      return Object.values(product)
        .join(" ")
        .toLowerCase()
        .includes(searchElm.current.value.toLowerCase());
    });
    setSearchResult(newProductList);
    // console.log(searchResult);
  };

  return (
    <div>
      <div className="ui segment" style={{ backgroundColor: "#555" }}>
        <span className="ui header center" style={{ color: "white" }}>
          <Home />
          N-CART
        </span>

        <div
          className="ui icon aligned center input"
          style={{ width: "500px", marginLeft: "20px" }}
        >
          <input
            type="text"
            placeholder="Search..."
            ref={searchElm}
            value={searchTerm}
            name={searchTerm}
            onChange={searchHandler}
          />
          <i className="search icon"></i>
        </div>
        <button className="ui button green right floated">Cart</button>
      </div>
    </div>
  );
};

export default Header;
