import React from 'react';
import './q11additionalInfo.css'


export default class Q11additionalInfo extends React.Component{
    onAdditionalInfo(event){
        event.preventDefault();
        if(this.props.onAdditionalInfo){
            const value = this.input.value;
            this.props.onAdditionalInfo(value);
        }
    }

    render(){return(
        <ul>
        <li className="number inline">11 <i className="fa fa-arrow-right" aria-hidden="true"></i></li>
        <li className="form-submit inline">
        <div action="submit">
        <div>Is there any additional information that you would like us to know?</div>
        <div className="small-brackets">(Max.budget, deliverable requirements, deadlines, specific design service, additional information)</div>
        <input type="text" id="extra-information" className="input-long-line" placeholder="Optional" ref={input => this.input = input}/>
            <div className="enter-button" onClick={e=>this.onAdditionalInfo(e)}>Enter</div>
        </div>
        </li>
        </ul>


    );
}
}
