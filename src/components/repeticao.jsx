import React from "react";

import produtos from "../data/produtos";

export default props => {

    function getProdutosList() {
        return produtos.map(prod => {
            return <li>{prod.id} - {prod.nome} - {prod.preco} </li>
        })
    }

    return (
        <div>
            <h2>Lista</h2>
            <ul>
                {getProdutosList()}
            </ul>
        </div>
    )
}