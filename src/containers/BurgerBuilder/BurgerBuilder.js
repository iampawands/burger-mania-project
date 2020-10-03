import React, {Component} from "react";
import Aux from "../../hoc/Auxilary"
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/BuildControls"
import Modal from "../../components/UI/Modal/Modal"
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"
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
        purchasable:true,
        purchasing:false
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
    purchaseHandler = () =>{
        this.setState({
            purchasing:true
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

    cancelPurchaseHandler = () =>{
        this.setState({
            purchasing:false
        })
    }

    continuePurchaseHandler = () =>{
        alert("YOu continue!!")
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
                <Modal show={this.state.purchasing} cancelPurchase={this.cancelPurchaseHandler}>
                    <OrderSummary ingredients={this.state.ingredients}
                    cancelPurchase={this.cancelPurchaseHandler}
                    continuePurchase={this.continuePurchaseHandler}
                    price={this.state.totalPrice}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    purchasing={this.purchaseHandler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;