import _, { head } from 'lodash';
import './style.css';
import { Header } from './components/header';
import { Todos } from './components/todos';


 function component() {
   const element = document.createElement('div');
    
    element.textContent = Header();
    Todos();
    

   return element;
 }

 document.body.appendChild(component());