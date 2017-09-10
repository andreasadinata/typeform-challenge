import React from 'react';
import './q5toq8.css'


export default class Q6genderTarget extends React.Component{
    onAgeTarget(event){
        event.preventDefault();
        if(this.props.onAgeTarget){
            const value = this.input.value;
            this.props.onAgeTarget(value);
        }
    }

    render(){return(
        <ul>
        <li className="number inline">7 <i className="fa fa-arrow-right" aria-hidden="true"></i></li>
        <li className="form-submit inline">
        <div>{this.props.name}, what is your target customer's age?</div>
        <ul className="box-choices-one-line">
        <li>
        <input type="text" value="17--" hidden/>
        <div className="information-special">
        <p className="square-box">A</p><span>17 or younger</span>
        </div>
        </li>
        <li>
        <input type="text" value="18-24" hidden/>
        <div className="information-special">
        <p className="square-box">B</p><span>18 to 24</span>
        </div>
        </li>
        <li>
        <input type="text" value="25-34" hidden/>
        <div className="information-special">
        <p className="square-box">C</p><span>25 to 34</span>
        </div>
        </li>
        <li>
        <input type="text" value="35-44" hidden/>
        <div className="information-special">
        <p className="square-box">D</p><span>35 to 44</span>
        </div>
        </li>
        <li>
        <input type="text" value="45-54" hidden/>
        <div className="information-special">
        <p className="square-box">E</p><span>45 to 54</span>
        </div>
        </li>
        <li>
        <input type="text" value="55-64" hidden/>
        <div className="information-special">
        <p className="square-box">F</p><span>55 to 64</span>
        </div>
        </li>
        <li>
        <input type="text" value="65-74" hidden/>
        <div className="information-special">
        <p className="square-box">G</p><span>65 to 74</span>
        </div>
        </li>
        <li>
        <input type="text" value="75++" hidden/>
        <div className="information-special">
        <p className="square-box">H</p><span>75 and Up</span>
        </div>
        </li>
        </ul>
        </li>
        </ul>

)
}
}
