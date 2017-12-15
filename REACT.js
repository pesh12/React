//Basic Hello World App

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
    <div id="Hello" className="greeting"> Hello World </div>,
    document.getElementById('root')
)


// BASIC COMPONENT USE

class MyComponent extends React.Component{
    render(){
        return "Hello, I am from component"
    }
}

ReactDOM.render(
    <MyComponent/>,
    document.getElementById('root')
)


// BASIC PROPS USE
// class name has to be started with a capital letter!!

class Name extends React.Component{
    render(){
        const {firstName, lastName} = this.props
        return `${firstName} ${lastName}`
        //return `${this.props.firstName} ${this.props.lastName}`
    }
}

class Greeting extends React.Component{
    render(){
        return (
            <div> 
                My Name is <Name firstName="Enes" lastName="Koci"/>
            </div>    
        )
    }
}

ReactDOM.render(
    <Greeting/>,
    document.getElementById('root')
)