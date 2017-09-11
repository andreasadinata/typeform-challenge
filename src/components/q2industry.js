import React from 'react';
import Scroll from 'react-scroll'; // Imports all Mixins
let scroller = Scroll.scroller;


export default class Q2industry extends React.Component{
    onIndustry(event){
        event.preventDefault();
        if(this.props.onIndustry){
            const value = this.input.value;
            this.props.onIndustry(value);
        }
        scroller.scrollTo('q3',{smooth:true})
    }

    render(){return(
        <ul>
        <li className="number inline">2 <i className="fa fa-arrow-right" aria-hidden="true"></i></li>
        <li className="form-submit inline">
        <form onSubmit={e=>this.onIndustry(e)}>
        <div>Which industry does your business operate in?</div>
        <input type="text" id="industry" className="input-long-line" required ref={input => this.input = input}/>
        <button className="enter-button">Enter</button>
        </form>
        </li>
        </ul>
    );
}
}
