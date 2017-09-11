import React from 'react';
import './q5toq8.css';
import Scroll from 'react-scroll';
let scroller = Scroll.scroller;



export default class Q6genderTarget extends React.Component{
    onGenderTarget(event,type){
        event.preventDefault();
        if(this.props.onGenderTarget){
            const value = type;
            this.props.onGenderTarget(value);
        }
        scroller.scrollTo('q7',{smooth:true})
    }

    render(){return(
        <ul>
        <li className="number inline">6 <i className="fa fa-arrow-right" aria-hidden="true"></i></li>
        <li className="form-submit inline">
        <div>What is your target customer's gender?</div>
        <ul className="box-choices">
        <li onClick={e=>this.onGenderTarget(e,'male')}>
        <div className="img-wrapper">
        <img src={require("../images/man.png")} alt="man"/>
        </div>
        <div className="information">
        <p className="square-box">A</p><span>Male</span>
        </div>
        </li>
        <li onClick={e=>this.onGenderTarget(e,'female')}>
        <div className="img-wrapper">
        <img src={require("../images/woman.png")} alt="woman"/>
        </div>
        <div className="information">
        <p className="square-box">B</p><span>Female</span>
        </div>
        </li>
        <li onClick={e=>this.onGenderTarget(e,'both')}>
        <div className="img-wrapper special">
        <img src={require("../images/man.png")} alt="man"/>
        <img src={require("../images/woman.png")} alt="woman"/>
        </div>
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
