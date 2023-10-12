import React, { useEffect } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCartTotal } from "../features/CartSlice";

export default function Navbar() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid> 
        <MDBNavbarBrand>Online Shoping</MDBNavbarBrand>
        <span >
          <Link to="/"> Product </Link>
        </span>
        <MDBBtn color="light">
          <Link to="/cart">Cart<i className="fas fa-cart-shopping fa-2x" >({totalQuantity})</i></Link>
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}