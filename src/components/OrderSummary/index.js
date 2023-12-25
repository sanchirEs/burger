import React from "react";
import Button from "../General/Button";

const OrderSummary = (props) => {
    return (
        <div>
            <h3>Your order</h3>
            <p>Your proportions: </p>
            <ul>
                {Object.keys(props.ingredients).map((el,i) => (
                    <li key={el}>{props.IngredientNames[el]} : {props.ingredients[el]} </li>
                    ))
                }
            </ul>
            <p><strong>Price : {props.price}</strong></p>
            <p>Are you fine with it?</p>

            <Button clicked={props.onCancel} btnType="Danger" text='Cancel'/>
            <Button clicked={props.onContinue} btnType="Success" text='Continue'/>
            
        </div>
    )
}

export default OrderSummary;