import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class Name extends React.Component{
    render(){
        const {firstName, lastName} = this.props
        return `${firstName} ${lastName}`
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
    <li>
        <App/>
        <Greeting/>
    </li>
    document.getElementById('root')
)