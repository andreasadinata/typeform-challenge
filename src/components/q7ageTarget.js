import React from 'react';
import './q5toq8.css'
import {scroller} from 'react-scroll';

export default class Q7ageTarget extends React.Component{
    onAgeTarget(event,type){
        event.preventDefault();
        if(this.props.onAgeTarget){
            const value = type;
            this.props.onAgeTarget(value);
        }
        scroller.scrollTo('q8',{smooth:true})
    }

    render(){return(
        <ul>
        <li className="number inline">7 <i className="fa fa-arrow-right" aria-hidden="true"></i></li>
        <li className="form-submit inline">
        <div>{this.props.name}, what is your target customer's age?</div>
        <ul className="box-choices-one-line">
        <li onClick={e=>this.onAgeTarget(e,'17--')}>
        <div className="information-special">
        <p className="square-box">A</p><p>17 or younger</p>
        </div>
        </li>
            <li onClick={e=>this.onAgeTarget(e,'18-24')}>
        <div className="information-special">
        <p className="square-box">B</p><p>18 to 24</p>
        </div>
        </li>
            <li onClick={e=>this.onAgeTarget(e,'25-34')}>
        <div className="information-special">
        <p className="square-box">C</p><p>25 to 34</p>
        </div>
        </li>
            <li onClick={e=>this.onAgeTarget(e,'35-44')}>
        <div className="information-special">
        <p className="square-box">D</p><p>35 to 44</p>
        </div>
        </li>
            <li onClick={e=>this.onAgeTarget(e,'45-54')}>
        <div className="information-special">
        <p className="square-box">E</p><p>45 to 54</p>
        </div>
        </li>
            <li onClick={e=>this.onAgeTarget(e,'55-64')}>
        <div className="information-special">
        <p className="square-box">F</p><p>55 to 64</p>
        </div>
        </li>
            <li onClick={e=>this.onAgeTarget(e,'65-74')}>
        <div className="information-special">
        <p className="square-box">G</p><p>65 to 74</p>
        </div>
        </li>
            <li onClick={e=>this.onAgeTarget(e,'75++')}>
        <div className="information-special">
        <p className="square-box">H</p><p>75 and Up</p>
        </div>
        </li>
        </ul>
        </li>
        </ul>
)
}
}
