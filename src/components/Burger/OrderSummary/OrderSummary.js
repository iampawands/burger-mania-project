import React from "react";
import Aux from "../../../hoc/Auxilary"
import Button from "../../UI/Button/Button"
const orderSummary = (props) => {
    const ingredients = Object.keys(props.ingredients).map(ingKey => {
        return <li key={ingKey}>
            <span style={{textTransform: "capitalize"}}>
                {ingKey} : {props.ingredients[ingKey]}
            </span></li>
    });
    return <Aux >
        <h3>Your Order</h3>
        <p>Burger with following items/ingredients:</p>
        <ul>
            {ingredients}
        </ul>
        <p><strong>Total Price : {props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={props.cancelPurchase}>CANCEL</Button>
        <Button btnType="Success" clicked={props.continuePurchase}>CONTINUE</Button>
    </Aux>
}
export default orderSummary