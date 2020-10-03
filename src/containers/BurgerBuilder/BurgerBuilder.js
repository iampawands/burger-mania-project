import React, {Component} from "react";
import Aux from "../../hoc/Auxilary"
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/BuildControls"

const INGREDIENTS_PRICES = {
    cheese: 1,
    bacon: 2,
    meat: 1.6,
    salad: 2.4
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            cheese: 1,
            bacon: 1,
            meat: 1,
            salad: 1
        },
        totalPrice: 7,
        purchasable:true
    }

    updatePurchaseState = (updateIngredients) => {
        const sum = Object.keys(updateIngredients).map(ingKey =>{
            return updateIngredients[ingKey];
        }).reduce((acc,cur)=>{
            return acc+cur;
        },0);
        this.setState({
            purchasable:sum>0
        })
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = newCount;
        const priceToAdd = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceToAdd;
        this.setState({
            ingredients: updateIngredients,
            totalPrice: newPrice
        })
        this.updatePurchaseState(updateIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = newCount;
        const priceToAdd = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceToAdd;
        this.setState({
            ingredients: updateIngredients,
            totalPrice: newPrice
        })
        this.updatePurchaseState(updateIngredients);
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;