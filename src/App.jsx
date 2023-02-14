import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
//import Componente1 from "./components/Componente1";
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

    // El padre manda al hijo una propiedad, el hijo (en componente1.jsx ) la recibe mediante propiedades */

// const App = () => {
//   return (
//     <div>
//       <Componente1 greeting= "Bienvenido a mi Ecommerce" />  
//     </div>
//   )
// }

 const App = () => {
   return (
     <div>
       <NavBar />  
       <ItemListContainer greeting = "Bienvenido a mi E-commerce"/> 
     </div>
   )
 }


export default App

