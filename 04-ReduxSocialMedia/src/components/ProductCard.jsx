import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

function ProductCard({
  productImg,
  productName,
  productDesc,
  productPrice,
  productInfo,
}) {
  const dispatch = useDispatch();

  return (
    <div className="m-2">
      <MDBCard>
        <MDBCardImage src={productImg} position="top" alt={productName} />
        <MDBCardBody>
          <MDBCardTitle>{productName}</MDBCardTitle>
          {/* <MDBCardText>{productDesc}</MDBCardText> */}

          <div
            className="
          d-flex"
          >
            <MDBBtn className="mx-2" color="light" rippleColor="dark">
              Price : {productPrice}
            </MDBBtn>
            <MDBBtn
              onClick={() => dispatch(addToCart(productInfo))}
              className="mx-2"
              color="info"
            >
              Add to Cart
            </MDBBtn>
          </div>

          {/* <MDBBtn href="#">Add to Cart</MDBBtn> */}
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default ProductCard;
