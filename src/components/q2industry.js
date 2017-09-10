import React from 'react';

export default class Q2industry extends React.Component{
    onIndustry(event){
        event.preventDefault();
        if(this.props.onIndustry){
            const value = this.input.value;
            this.props.onIndustry(value);
        }
    }

    render(){return(
        <ul>
        <li className="number inline">2 <i className="fa fa-arrow-right" aria-hidden="true"></i></li>
        <li className="form-submit inline">
        <div action="submit">
        <div>Which industry does your business operate in?</div>
        <input type="text" id="industry" className="input-long-line" required ref={input => this.input = input}/>
        <div className="enter-button" onClick={e=>this.onIndustry(e)}>Enter</div>
        </div>
        </li>
        </ul>
    );
}
}
