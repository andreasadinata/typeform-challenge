import React from 'react';
import './paragraph.css';


export default class Paragraph extends React.Component{
    onName(event){
        event.preventDefault();
        if(this.props.onName){
            const value = this.input.value;
            this.props.onName(value);
        }
    }

    render(){return(
        <ul className="special-paragraph">
        <li className="number inline"><i className="fa fa-quote-right" aria-hidden="true"></i></li>
        <li className="form-submit inline">
        <div>
        <p className="font-special">Hi {this.props.name},</p>
        <br/>
        <p className="font-special">Thank you for taking this questionnaire.</p>
        <br/>
        <p className="font-special">Your answers will help us build a great brand for you. One that is strong and memorable in your customers' minds. One that defines clearly what you are, what you stand for, and what makes you different.</p>
        <br/>
        <p className="font-special">Let's get started!</p>
        </div>
        </li>
        </ul>
    );
}
}
