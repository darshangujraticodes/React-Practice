import React, { useState } from "react";
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

function Navbar() {
  const [openBasic, setOpenBasic] = useState(false);

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
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>

          <div>
            <Link to="/cart">
              <MDBBtn className="me-1">
                Cart <span>(0)</span>
              </MDBBtn>
            </Link>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export default Navbar;
