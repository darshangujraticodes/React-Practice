import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

function CartProduct({
  cartProductImg,
  cartProductTitle,
  cartProductPrice,
  cartProductQuantity,
  cartProductColor,
  cartProductId,
}) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="row">
        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
          <div
            className="bg-image hover-overlay hover-zoom ripple rounded"
            data-mdb-ripple-color="light"
          >
            <img
              src={cartProductImg}
              className="w-100"
              alt={cartProductTitle}
            />
            <a href="#!">
              <div className="mask"></div>
            </a>
          </div>
        </div>

        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
          <p>
            <strong>{cartProductTitle}</strong>
          </p>
          <p>Color: {cartProductColor}</p>
          {/* <p>Size: M</p> */}
          <button
            type="button"
            className="btn btn-primary btn-sm me-1 mb-2"
            title="Remove item"
            onClick={() => dispatch(removeFromCart(cartProductId))}
          >
            <i className="fas fa-trash"></i>
          </button>
          <button
            type="button"
            data-mdb-button-init
            data-mdb-ripple-init
            className="btn btn-danger btn-sm mb-2"
            data-mdb-tooltip-init
            title="Move to the wish list"
          >
            <i className="fas fa-heart"></i>
          </button>
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <label className="form-label" htmlFor="form1">
            Quantity
          </label>
          <div className="d-flex mb-4">
            <button
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-primary px-3 me-2"
            >
              <i className="fas fa-minus"></i>
            </button>

            <div className="form-outline  ">
              <p className="text-center quantityAmount ">
                {cartProductQuantity}
              </p>
            </div>

            <button
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-primary px-3 ms-2"
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>

          <p className="text-start ">
            <strong>Price : ₹ {cartProductPrice}</strong>
          </p>
        </div>
      </div>

      <hr className="my-4" />
    </>
  );
}

export default CartProduct;
