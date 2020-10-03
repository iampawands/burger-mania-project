import React from "react";
import Aux from "../../hoc/Auxilary"
import classes from "./Layout.module.css"
const layout = (props) => (
    <Aux>
        <div>Toolbar, Sidebar etc.</div>
        <main className={classes.Content}>
            <div>{props.children}</div>
        </main>
    </Aux>
);

export default layout