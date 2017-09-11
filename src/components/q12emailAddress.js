import React from 'react';
import './q12emailAddress.css'


export default class Q12emailAddress extends React.Component{
    onEmailAddress(event){
        event.preventDefault();
        if(this.props.onEmailAddress){
            const value = this.input.value;
            this.props.onEmailAddress(value);
        }
    }

    render(){return(
        <ul className="last-question">
        <li className="number inline">12 <i className="fa fa-arrow-right" aria-hidden="true"></i></li>
        <li className="form-submit inline">
        <form onSubmit={e=>this.onEmailAddress(e)} action="submit">
        <div>Hey {this.props.name}, can we get your email address?</div>
        <img src={require("../images/email.png")} className="email" alt="email"/>
        <input type="text" id="extra-information" className="input-long-line" required ref={input => this.input = input}/>
        <button className="enter-button" >Enter</button>
        </form>
        </li>
        </ul>
    );
}
}
