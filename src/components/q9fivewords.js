import React from 'react';


export default class Q9fivewords extends React.Component{
    onFiveWords(event){
        event.preventDefault();
        if(this.props.onFiveWords){
            const value = this.input.value;
            this.props.onFiveWords(value);
        }
    }

    render(){return(
        <ul>
        <li className="number inline">9 <i className="fa fa-arrow-right" aria-hidden="true"></i></li>
        <li className="form-submit inline">
        <div action="submit">
        <div>If your brand were a person, how would you describe him/her in 5 words?</div>
        <input type="text" id="describe-5-words" className="input-long-line" required ref={input => this.input = input}/>
        <div className="enter-button" onClick={e=>this.onFiveWords(e)}>Enter</div>
        </div>
        </li>
        </ul>

    );
}
}
