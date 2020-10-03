import React, {Component} from "react";
import Aux from "../../hoc/Auxilary"
import Burger from "../../components/Burger/Burger"
import BuildConrols from "../../components/Burger/BuildControls/BuildControls"

const INGREDIENTS_PRICES = {
    cheese: 1,
    bacon: 0.5,
    meat: 1.4,
    salad: 0.2
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            cheese: 0,
            bacon: 0,
            meat: 0,
            salad: 0
        },
        totalPrice:4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount +1;
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type]=newCount;
        const priceToAdd = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceToAdd;
        this.setState({
            ingredients:updateIngredients,
            totalPrice:newPrice
        })
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0) return
        const newCount = oldCount -1;
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type]=newCount;
        const priceToAdd = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceToAdd;
        this.setState({
            ingredients:updateIngredients,
            totalPrice:newPrice
        })
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]<=0
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildConrols
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;