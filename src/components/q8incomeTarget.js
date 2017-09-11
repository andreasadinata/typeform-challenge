import React from 'react';
import './q5toq8.css'
import {scroller} from 'react-scroll';

export default class Q8incomeTarget extends React.Component{
    onIncomeTarget(event,type){
        event.preventDefault();
        if(this.props.onIncomeTarget){
            const value = type;
            this.props.onIncomeTarget(value);
        }
        scroller.scrollTo('q9',{smooth:true})
    }

    render(){return(
        <ul>
        <li className="number inline">8 <i className="fa fa-arrow-right" aria-hidden="true"></i></li>
        <li className="form-submit inline">
        <div>And what is their average household income?</div>
        <ul className="box-choices-one-line">
        <li onClick={e => this.onIncomeTarget(e,'10--')}>
        <input hidden type="text" value="10--" ref={input=> this.input=input}/>
        <div className="information-special">
        <p className="square-box">A</p><p>Less than $10,000</p>
        </div>
        </li>
            <li onClick={e => this.onIncomeTarget(e,'10-35')}>
               <div className="information-special">
        <p className="square-box">B</p><p>$10,000-$35,000</p>
        </div>
        </li>
            <li onClick={e => this.onIncomeTarget(e,'35-55')}>
               <div className="information-special">
        <p className="square-box">C</p><p>$35,000-$55,000</p>
        </div>
        </li>
            <li onClick={e => this.onIncomeTarget(e,'55-75')}>
               <div className="information-special">
        <p className="square-box">D</p><p>$55,000-$75,000</p>
        </div>
        </li>
            <li onClick={e => this.onIncomeTarget(e,'75-100')}>
                <div className="information-special">
        <p className="square-box">E</p><p>$75,000-$100,000</p>
        </div>
        </li>
            <li onClick={e => this.onIncomeTarget(e,'100-150')}>

        <div className="information-special">
        <p className="square-box">F</p><p>$100,000-$150,000</p>
        </div>
        </li>
            <li onClick={e => this.onIncomeTarget(e,'150-200')}>

        <div className="information-special">
        <p className="square-box">G</p><p>$150,000-$200,000</p>
        </div>
        </li>
            <li onClick={e => this.onIncomeTarget(e,'200++')}>
               <div className="information-special">
        <p className="square-box">H</p><p>More than $200,000</p>
        </div>
        </li>
        </ul>
        </li>
        </ul>

    )
            }
}
