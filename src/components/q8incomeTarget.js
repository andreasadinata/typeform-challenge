import React from 'react';
import './q5toq8.css'


export default class Q8incomeTarget extends React.Component{
    onIncomeTarget(event){
        event.preventDefault();
        if(this.props.onIncomeTarget){
            const value = this.input.value;
            this.props.onIncomeTarget(value);
        }
    }

    render(){return(
        <ul>
        <li className="number inline">8 <i className="fa fa-arrow-right" aria-hidden="true"></i></li>
        <li className="form-submit inline">
        <div>And what is their average household income?</div>
        <ul className="box-choices-one-line">
        <li>
        <input hidden type="text" value="10--"/>
        <div className="information-special">
        <p className="square-box">A</p><p>Less than $10,000</p>
        </div>
        </li>
        <li>
        <input hidden type="text" value="10-35"/>
        <div className="information-special">
        <p className="square-box">B</p><p>$10,000-$35,000</p>
        </div>
        </li>
        <li>
        <input hidden type="text" value="35-55"/>
        <div className="information-special">
        <p className="square-box">C</p><p>$35,000-$55,000</p>
        </div>
        </li>
        <li>
        <input hidden type="text" value="55-75"/>
        <div className="information-special">
        <p className="square-box">D</p><p>$55,000-$75,000</p>
        </div>
        </li>
        <li>
        <input hidden type="text" value="75-100"/>
        <div className="information-special">
        <p className="square-box">E</p><p>$75,000-$100,000</p>
        </div>
        </li>
        <li>
        <input hidden type="text" value="100-150"/>
        <div className="information-special">
        <p className="square-box">F</p><p>$100,000-$150,000</p>
        </div>
        </li>
        <li>
        <input hidden type="text" value="150-200"/>
        <div className="information-special">
        <p className="square-box">G</p><p>$150,000-$200,000</p>
        </div>
        </li>
        <li>
        <input hidden type="text" value="200++"/>
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
