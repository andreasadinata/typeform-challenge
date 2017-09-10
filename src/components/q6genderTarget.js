import React from 'react';
import './q5toq8.css'


export default class Q6genderTarget extends React.Component{
    onGenderTarget(event){
        event.preventDefault();
        if(this.props.onGenderTarget){
            const value = this.input.value;
            this.props.onGenderTarget(value);
        }
    }

    render(){return(
        <ul>
        <li className="number inline">6 <i className="fa fa-arrow-right" aria-hidden="true"></i></li>
        <li className="form-submit inline">
        <div>What is your target customer's gender?</div>
        <ul className="box-choices">
        <li>
        <div className="img-wrapper">
        <img src={require("../images/man.png")} alt="man"/>
        </div>
        <input type="hidden" type="text" value="male" hidden/>
        <div className="information">
        <p className="square-box">A</p><span>Male</span>
        </div>
        </li>
        <li>
        <div className="img-wrapper">
            <img src={require("../images/woman.png")} alt="woman"/>
        </div>
        <input type="hidden" type="text" value="Female" hidden/>
        <div className="information">
        <p className="square-box">B</p><span>Female</span>
        </div>
        </li>
        <li>
        <div className="img-wrapper special">
        <img src={require("../images/man.png")} alt="man"/>
            <img src={require("../images/woman.png")} alt="woman"/>
        </div>
        <input type="hidden" type="text" value="Both" hidden/>
        <div className="information">
        <p className="square-box">C</p><span>No preference</span>
        </div>
        </li>
        </ul>
        </li>
        </ul>

    )
}
}
