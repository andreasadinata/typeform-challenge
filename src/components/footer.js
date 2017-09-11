import React from 'react';
import './footer.css';

export default class Footer extends React.Component{
    onThankyou(event){
        event.preventDefault;
        if(this.props.onThankyou){
            this.props.onThankyou('true')
        }
    }
    render(){
        let submitButton;
        if(this.props.percentage===100){
            submitButton = <div className="submit-everything" onClick={e=>this.onThankyou(e)}>SUBMIT</div>
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
