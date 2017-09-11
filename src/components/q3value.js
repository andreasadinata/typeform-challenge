import React from 'react';
import Scroll from 'react-scroll';
let scroller = Scroll.scroller;

export default class Q3value extends React.Component{
    onValue(event){
        event.preventDefault();
        if(this.props.onValue){
            const value = this.input.value;
            this.props.onValue(value);
        }
        scroller.scrollTo('q4',{smooth:true})
    }

    render(){return(
        <ul>
        <li className="number inline">3 <i className="fa fa-arrow-right" aria-hidden="true"></i></li>
        <li className="form-submit inline">
        <form onSubmit={e=>this.onValue(e)} action="submit" id="description">
        <div>Can you tell me what is your vision or mission of your business?</div>
            <input type="text" className="input-long-line" id="value" required ref={input => this.input = input}/>
        <submit className="enter-button">Enter</submit>
        </form>
        </li>
        </ul>

    );
}
}
