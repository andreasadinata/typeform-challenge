import React from 'react';
import {scroller} from 'react-scroll';

export default class Q9fivewords extends React.Component{
    onFiveWords(event){
        event.preventDefault();
        if(this.props.onFiveWords){
            const value = this.input.value;
            this.props.onFiveWords(value);
        }
        scroller.scrollTo('q10',{smooth:true})
    }

    render(){return(
        <ul>
        <li className="number inline">9 <i className="fa fa-arrow-right" aria-hidden="true"></i></li>
        <li className="form-submit inline">
        <form onSubmit={e=>this.onFiveWords(e)}>
        <div>If your brand were a person, how would you describe him/her in 5 words?</div>
        <input type="text" id="describe-5-words" className="input-long-line" required ref={input => this.input = input}/>
        <button className="enter-button" >Enter</button>
        </form>
        </li>
        </ul>

    );
}
}
