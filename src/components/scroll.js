import React from "react";

const scroll = (props) => {
    return (
        <div style = {{overflow: 'scroll', height:"1000px"}}>
            {props.children}
        </div>
    )
}

export default scroll;