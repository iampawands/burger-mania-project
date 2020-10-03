import React, {Component} from "react";
import Aux from "../../hoc/Auxilary"
import Burger from "../../components/Burger/Burger"

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            cheese: 1,
            bacon: 1,
            meat: 1,
            salad: 1
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build controls.</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;