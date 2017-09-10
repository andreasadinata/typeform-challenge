import React from 'react';
import './q1name.css';

export default class Q1name extends React.Component{
    onName(event){
        event.preventDefault();
        if(this.props.onName){
            const value = this.input.value;
            this.props.onName(value);
        }
    }

    render(){return(
        <ul>
        <li className="number inline">1 <i className="fa fa-arrow-right" aria-hidden="true"></i></li>
        <li className="form-submit inline">
        <div>
        <div>What is your first name?*</div>
        <img src={require("../images/default.png")} className="smiley-face"  alt="smiley-face"/>
        <input type="text" id="name" className="input-long-line" required ref={input => this.input = input}/>
        <div className="enter-button" onClick={e=>this.onName(e)}>Enter</div>
        </div>
        </li>
        </ul>
    );
}
}
