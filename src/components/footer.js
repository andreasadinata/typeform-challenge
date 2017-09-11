import React from 'react';
import './footer.css';

export default class Footer extends React.Component{
    render(){
        let submitButton;
        if(this.props.percentage===100){
            submitButton = <div className="submit-everything">SUBMIT</div>
        }

        return(
        <div className="footer-completed">
        <div className="sixty-percent">
            <div className="percentage-completed">
            <div>{this.props.percentage}% completed</div>
            <div className="bar-completed"><div className="progress" style={{width: this.props.percentage +"%"}}></div></div>
            </div>
            {submitButton}
        </div>
        </div>
        );
}
}
