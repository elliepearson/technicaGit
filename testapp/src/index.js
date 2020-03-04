import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

import Alert from './Alert.js';

class FindAhmed extends React.Component{
  render(){
    let response;
    let responseArray = [];
    for(let i = 0; i < this.props.name.length; i++){
      if (this.props.name[i] === "Ahmed"){
        response =  (
          <div key = {this.props.name[i]}>
            <h1> I found {this.props.name[i]}</h1>
          </div>);
      }
      else{
        response = (
          <div key = {this.props.name[i]}>
            <h1> I did not find Ahmed</h1>
          </div>);
        }
        responseArray.push(response);
    }

    return responseArray;

    }
}



ReactDOM.render(<FindAhmed name = {["Ellie","Mary", "Jose", "Ahmed"]}  />, document.getElementById('root'));

//ReactDOM.render(<Alert/>, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
