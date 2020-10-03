import React from "react";
import Aux from "../../hoc/Auxilary"
import classes from "./Layout.module.css"
import Toobar from "../../components/Navigation/Toolbar/Toolbar"
const layout = (props) => (
    <Aux>
        <Toobar/>
        <main className={classes.Content}>
            <div>{props.children}</div>
        </main>
    </Aux>
);

export default layout