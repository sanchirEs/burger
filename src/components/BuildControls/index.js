import React from "react";
import BuildControl from "../BuildControl";
import css from "./style.module.css";


const BuildControls = props => {

    
    return (
        <>
        <div className={css.BuildControls}>
            <p>Total price : <strong>{props.price}</strong></p>
            {
            Object.keys(props.IngredientNames).map(el => (
                <BuildControl 
                key={el}
                disabled={props.disabledIngredients}
                ortsNemeh={props.ortsNemeh} 
                ortsHasah={props.ortsHasah} 
                type={el} orts={props.IngredientNames[el]} />
            ))
            }    
            
            <button 
            onClick={props.showConfirmModal}
            disabled={props.disabled} 
            className={css.OrderButton}>
                Order
            </button>
            
        </div>    
        </>
    )
}
export default BuildControls;