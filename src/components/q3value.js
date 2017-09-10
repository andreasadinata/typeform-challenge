import React from 'react';
import './q3value.css'

export default class Q3value extends React.Component{
    onValue(event){
        event.preventDefault();
        if(this.props.onValue){
            const value = this.input.value;
            this.props.onValue(value);
        }
    }

    render(){return(
        <ul>
        <li className="number inline">3 <i className="fa fa-arrow-right" aria-hidden="true"></i></li>
        <li className="form-submit inline">
        <div action="submit">
        <div>Can you tell me what are the value, vision, and mission of your business?</div>
        <textarea type="text" id="description" required ref={input => this.input = input}></textarea>
        <div className="enter-button" onClick={e=>this.onValue(e)}>Enter</div>
        </div>
        </li>
        </ul>

    );
}
}
