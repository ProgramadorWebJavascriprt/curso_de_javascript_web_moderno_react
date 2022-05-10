    // terça-feira,03/05/2022 das 21:48:00 as 22:03:10  h+|-
import React from 'react'
import {childrenwrithProps} from'../uteis/uteis'

export default props => 
<div>
    <h1>{props.nome} {props.sobrenome} </h1>
    <h2>Filhos</h2>
    <ul>
        {/* Quinta-feira,05/05/2022 das 21:35:45 a 22:05:00 h+|- */}
      {/* {pros.children} */}
      {
        childrenwrithProps(props)
        }
    </ul>
</div>