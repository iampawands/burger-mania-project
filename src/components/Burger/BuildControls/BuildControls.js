import React from "react";
import BuildControl from "./BuildControl/BuildControl"
import classes from "./BuildControls.module.css"

const controls = [{label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'}]

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            {controls.map(control=>{
                return <BuildControl key={control.label} label={control.label}/>
            })}
        </div>
    )
}
export default buildControls;