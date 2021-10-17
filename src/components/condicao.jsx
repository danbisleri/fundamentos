import React from "react";
// eslint-disable-next-line
export default props => {
    return (
        <div>
            <h2>O Numero é {props.numero}</h2>
            {props.numero % 2 === 0 ? <span>PAR</span> : <span>IMPAR</span>}
        </div>
    )
}