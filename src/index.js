import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Primeiro from './componentes/Primeiro';
import pai from './componentes/pai'
import filho from './componentes/filho'

ReactDOM.render(
// {/* <Primeiro/>, document.getElement);
// root.render(
  // <React.StrictMode>
  //   <App />
  // // </React.StrictMode> */

<div>
<pai nome="Paulo"sobrenome="Silva"/> 
  <filho nome = "Pedro" />
  {/* <filho nome = "Paulo" />
  <filho nome = "Carla" /> */}
</div>
// }
// )
,document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// import  React from 'react'
// import ReactDOM from 'react-dom'
// ReactDOM.render(<h1>React</h1>, document.getElementById('root') )

