import React from "react";
import classes from "./Burger.module.css"
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(ingKey => {
        return [...Array(props.ingredients[ingKey])].map( (_,ind) => {
            return <BurgerIngredient key={ingKey + ind} type={ingKey}/>
        });
    }).reduce((accumulator,curvalue)=>{
        return accumulator.concat(curvalue)
    },[]);

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding Ingredients!!</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}
export default burger;