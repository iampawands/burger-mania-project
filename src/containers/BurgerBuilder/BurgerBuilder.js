import React, {Component} from "react";
import Aux from "../../hoc/Auxilary"
import Burger from "../../components/Burger/Burger"
import BuildConrols from "../../components/Burger/BuildControls/BuildControls"
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            cheese: 0,
            bacon: 0,
            meat: 0,
            salad: 0
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildConrols/>
            </Aux>
        )
    }
}

export default BurgerBuilder;