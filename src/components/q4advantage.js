import React from 'react';
import Scroll from 'react-scroll';
let scroller = Scroll.scroller;


export default class Q4advantage extends React.Component{
    onAdvantage(event){
        event.preventDefault();
        if(this.props.onAdvantage){
            const value = this.input.value;
            this.props.onAdvantage(value);
        }
        scroller.scrollTo('q5',{smooth:true})
    }

    render(){return(
        <ul>
        <li className="number inline">4 <i className="fa fa-arrow-right" aria-hidden="true"></i></li>
        <li className="form-submit inline">
        <form onSubmit={e=>this.onAdvantage(e)}>
        <div>{this.props.name}, what is the single most important thing that sets your business apart from the competition?</div>
        <input type="text" id="why-better" className="input-long-line" required ref={input => this.input = input}/>
        <button className="enter-button">Enter</button>
        </form>
        </li>
        </ul>
    );
}
}
