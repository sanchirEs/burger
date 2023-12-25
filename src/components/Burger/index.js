import React from "react";
import css from "./style.module.css"
import BurgerIngredient from "../BurgerIngredient";

const Burger =(props) =>{

    let content = [];
    
    const items = Object.entries(props.orts);
    
    items.map((el) => {
        for ( let i = 0; i < el[1]; i++ )
        content.push (<BurgerIngredient key={`${el[0]} ${i+1}`} type={el[0]}/>)
        return null;
    });

    if(content.length === 0)
        content = <p>Please choose the ingredients...</p>

    return (
        <div className={css.Burger}>
            <BurgerIngredient type="bread-top"/>
            {content} 
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default Burger;