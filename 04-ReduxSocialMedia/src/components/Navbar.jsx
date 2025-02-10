import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";

import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../features/cart/cartSlice";

function Navbar() {
  const [openBasic, setOpenBasic] = useState(false);

  const { cart, totalQuantity } = useSelector(
    (state) => state.cartStoreReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <>
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">Brand</MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenBasic(!openBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar open={openBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `  menu  ${isActive ? " menu-active " : ""} `
                  }
                >
                  All Products
                </NavLink>

                <NavLink
                  to="/todo"
                  className={({ isActive }) =>
                    ` menu  ${isActive ? " menu-active " : ""} `
                  }
                >
                  Redux Todo List
                </NavLink>

                <NavLink
                  to="/rtk-api-call"
                  className={({ isActive }) =>
                    ` menu  ${isActive ? " menu-active " : ""} `
                  }
                >
                  RTK API Call
                </NavLink>

                <NavLink
                  to="/github-users"
                  className={({ isActive }) =>
                    ` menu  ${isActive ? " menu-active " : ""} `
                  }
                >
                  Github API Call
                </NavLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>

          <div>
            <Link to="/cart">
              <MDBBtn className="me-1">
                Cart <span>( {totalQuantity} )</span>
              </MDBBtn>
            </Link>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export default Navbar;
