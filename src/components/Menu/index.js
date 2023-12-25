import React from "react";
import css from "./style.module.css"
import MenuItem from "../MenuItem";

const Menu = () => {
    return (
        <>
        <div>
            <ul className={css.Menu}>
                <MenuItem active link='/'>New Order</MenuItem>
                <MenuItem link='/login'> Log-in</MenuItem>
            </ul>
        </div>
        </>
    )
}

export default Menu;