import { connect } from "react-redux";
import { fetchAllProducts } from "./Product.epic";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ProductListing = ({ products, fetchAllProducts }) => {
  useEffect(() => {
    fetchAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allProducts = products.data;
  //   console.log(allProducts);
  const renderProductList = allProducts?.map((product) => {
    // console.log(product);

    const { id, title, image, price, category } = product;
    return (
      <Link to={`product/${id}`} key={id}>
        <div className="three wide column" style={{ marginBottom: "20px" }}>
          <div className="ui card link">
            <div className="card" style={{ height: "400px" }}>
              <div className=" ui image fluid">
                <img src={image} alt={title} style={{ height: "300px" }} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="category">{category}</div>
                <div className="meta right floated" style={{ color: "blue" }}>
                  ${price}
                </div>
                {/* <div className="description">{description}</div> */}
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  });
  //   console.log(products.data);
  return (
    <div className="ui main">
      <div className="ui grid">{renderProductList}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { products: state.allProducts };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProducts: () => dispatch(fetchAllProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);
