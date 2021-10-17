import './card.css'
import React from "react";
// eslint-disable-next-line
export default props =>
    <div className="card">
        <div className="conteudo">
            {props.children}
        </div>
        <div className="footer">
            {props.titulo}
        </div>
    </div>