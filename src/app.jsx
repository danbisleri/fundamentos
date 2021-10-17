import "./app.css";

import React from "react";

import Primeiro from './components/primeiro'

import Segundo from './components/segundo'

import ComParametro from './components/comParametro'

import ComFilhos from './components/comFilhos'

import Card from './components/layout/card'

import Repeticao from './components/repeticao'
import Condicao from './components/condicao';

export default props =>
    <div className="app">
        <Card titulo="Primeiro">
            <Primeiro></Primeiro>
        </Card>

        <Card titulo="Segundo">
            <Segundo></Segundo>
        </Card>

        <Card titulo="Com Parametro">
            <ComParametro subtitulo="Teste subtitulo parametro"></ComParametro>
        </Card>

        <Card titulo="Parametro 2">
            <ComParametro subtitulo="Subtitulo 2"></ComParametro>
        </Card>

        <Card titulo="Com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Carlos</li>
                    <li>João</li>
                    <li>Judas</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="Titulo Card" >Conteudo</Card>

        <Card titulo="Titulo Card2 " >Conteudo 2 </Card>

        <Card titulo="Repeticao">
            <Repeticao></Repeticao>
        </Card>

        <Card titulo="Condicao">
            <Condicao numero="10"></Condicao>
        </Card>
    </div>
