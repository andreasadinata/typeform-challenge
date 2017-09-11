import React from 'react';
import './q1name.css';
import {scroller} from 'react-scroll';


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
        <form onSubmit={e=>this.onName(e)}>
        <div>What is your first name?*</div>
        <img src={require("../images/default.png")} className="smiley-face"  alt="smiley-face"/>
        <input type="text" id="name" className="input-long-line" autoComplete="off" required ref={input => this.input = input}/>
        <button className="enter-button" onClick={()=>scroller.scrollTo('paragraph',{smooth:true})}>Enter</button>
        </form>
        </li>
        </ul>
    );
}
}
