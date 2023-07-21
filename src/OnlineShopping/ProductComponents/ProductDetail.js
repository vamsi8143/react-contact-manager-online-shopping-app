import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { fetchProduct } from "./Product.epic";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  userProductErrorAction,
  userProductRemoveAction,
  userProductSelectedAction,
} from "./ProductActions";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const selectProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        dispatch(userProductErrorAction(err));
        // console.log("err", err.message);
      });
    dispatch(userProductSelectedAction(response.data));
    // console.log("resp", response.data);
  };

  useEffect(() => {
    selectProduct();
    return () => {
      dispatch(userProductRemoveAction());
    };
  }, [id]);
  // console.log("res", product);

  const { title, image, description, price, category } = product;

  return (
    <div>
      <Link to={"/"}>
        <div className="ui segment">
          <button className=" ui button  blue ">Home </button>
        </div>
      </Link>
      {Object.values(product).length === 0 ? (
        <div>...loading</div>
      ) : (
        <div className="ui grid container">
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img src={image} className="ui fluid image" alt="items_pic" />
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2 className="ui tag yellow label">{price}</h2>
                  <h3 className="ui brown block header">{category}</h3>
                  <p>{description}</p>
                  <div className="ui vertical animated button">
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div>
                    <div className="visible content">Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     product: state.product,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     selectedProduct: (id) => dispatch(fetchProduct(id)),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
export default ProductDetail;
