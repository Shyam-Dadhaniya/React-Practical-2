import React from "react";
import classes from './App.module.css'
import img from "../Assest/index.png";
const App = () => {
  return (
    <div >
      <h1 className={classes.heading}>Hello From React</h1>
      <div className={classes.img}><img src={img}></img></div>
    </div>
  );
};
export default App;
