import React from 'react';


export default class Q12emailAddress extends React.Component{
    onEmailAddress(event){
        event.preventDefault();
        if(this.props.onEmailAddress){
            const value = this.input.value;
            this.props.onEmailAddress(value);
        }
    }

    render(){return(
        <ul>
        <li className="number inline">12 <i className="fa fa-arrow-right" aria-hidden="true"></i></li>
        <li className="form-submit inline">
        <div action="submit">
        <div>Hey {this.props.name}, can we get your email Address?</div>
        <input type="text" id="extra-information" className="input-long-line" required ref={input => this.input = input}/>
        <div className="enter-button" onClick={e=>this.onEmailAddress(e)}>Enter</div>
        </div>
        </li>
        </ul>

    );
}
}