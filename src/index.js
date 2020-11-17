import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


let time = new Date();
time = time.getHours();
let greetings = {};
const cssStyle = {};



if(time>=1 && time <12)
{
  greetings = 'Good Morning';
  cssStyle.color= 'green';
}
else if(time>=12 && time<=19)
{
 greetings = 'Good Afternoon';
 cssStyle.color= 'yellow';
}
else 
{
  greetings = 'Good Night';
  cssStyle.color= 'lightgrey';
}



ReactDOM.render(
  <>
  <div>
  <h1 >Hello chief, <span style={cssStyle}>{greetings}</span></h1>
  </div>
  </>
 ,
  document.getElementById('root')
);


