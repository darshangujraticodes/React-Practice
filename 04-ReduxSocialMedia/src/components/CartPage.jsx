import React from "react";
import CartProduct from "./CartProduct";
import { useDispatch, useSelector } from "react-redux";

function CartPage() {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.cartStoreReducer
  );

  const cartData = useSelector((state) => state.cartStoreReducer.cart);

  const cartTotalQuantity = cartData.reduce((acc, a) => acc + a.quantity, 0);

  const cartCalculatedPrice = cartData.reduce((acc, a) => acc + a.price, 0);

  console.log("total price  = " + totalPrice);

  const dispatch = useDispatch();

  //   console.log(cartData);

  return (
    <>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  {/* <h5 className="mb-0">Cart - 2 items</h5> */}
                </div>
                <div className="card-body">
                  {cartData.length > 0 ? (
                    cartData?.map((item, index) => (
                      <div key={index}>
                        <CartProduct
                          cartProductImg={item.img}
                          cartProductPrice={item.price}
                          cartProductTitle={item.title}
                          cartProductQuantity={item.quantity}
                          cartProductColor={item.color}
                          cartProductId={item.id}
                        />
                      </div>
                    ))
                  ) : (
                    <div>
                      <h1>Your Cart Feels Lonely</h1>
                      <p className="text-center mt-3">
                        Let's Fill It with Something Special !
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                  <p>
                    <strong>We accept</strong>
                  </p>
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Total Quantity
                      <span>{cartTotalQuantity}</span>
                    </li>

                    <hr />

                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>₹ {cartCalculatedPrice}</strong>
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CartPage;
