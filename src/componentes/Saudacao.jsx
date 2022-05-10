// segunda-feira,02 de maio de 2022 das 21:38:00 as 22:07:00 h+|-
import React, { Component } from 'react'
export default class Saudacao extends Component {
    state ={
        // tipo: "Fala",
        // nome:"Pedro"
        tipo: this.props.tipo,
        nome: this.props.nome
    }
    // terça-feira,03/05/2022 das 21:35:00 as 21:45:10  h+|-
    constructor(props){
        super(props)
        // this.state ={
        //     tipo: this.props.tipo,
        //     nome: this.props.nome

        // }
        this.setTipo = this.setTipo.bind(this)
        this.setNome = this.setNome.bind(this)

    }
    setTipo(e){
        // console.log(e.target.value)
        // this.props.tipo = e.target.value
         this.setState({tipo: e.target.value})

    }
    setNome(e){
        this.setState({nome: e.target.value})
    }
 render() {
   const { tipo, nome } = this.state
   return(
       <div>
           <h1>{tipo} {nome} !</h1>
           <hr/>
           <input type="text" placeholder="Tipo..." value={tipo}
               onChange={e => this.setTipo(e)}
           />
           <input type="text" placeholder="Nome..." value={nome}
            onChange={e => this.setNome(e)}/>

       </div>
   )
 }
}