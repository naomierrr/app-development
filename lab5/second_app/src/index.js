import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import parrot from './images/img1.jpg';
import User from'./comments'
//import images
import icon4 from './images/icon4.png'
import icon5 from './images/icon5.png'
import icon1 from './images/icon1.png'



//create content in the app using function component
const App = function(){
  //define a variable name
  let fullname = "Naomi Chen";
  //declear a function
  function greeting(){
    return "Good evening"
  }
  return(
    <div>
      <h1 style={{textAlign: "center", color: "orange"}}>Welcome to ReactJS {fullname}</h1>
      <p>{greeting()} Let's be familiar with JSX elements</p>
      <figure className='introimg'>
        <img src={parrot}/>
      </figure>
      {/* Card  */}
      <section className='cardcontainer'>
        <User image={icon4} name='Mary' date='07/12/24' comments='Great!'/>
        <User image={icon5} name='Avacado' date='07/12/24'comments='I need more water!'/>
        <User image={icon1} name='Coffee' date='07/12/24'comments='Its too hot!'/> 
      </section>
    </div> 
  )
}


// root the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

