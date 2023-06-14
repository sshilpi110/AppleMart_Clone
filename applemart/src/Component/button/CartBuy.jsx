
import React from "react";
import { NavLink } from "react-router-dom";
const CartBuy=()=>{
    return(
       <>
       <NavLink  to="/cart" className="btn btn-outline-primary ms-2">
        <span className="fa fa-shopping-cart me-1"></span>cart(0)
       </NavLink>
       </>
    )
}
export default CartBuy ;