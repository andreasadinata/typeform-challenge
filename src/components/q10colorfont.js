import React from 'react';


export default class Q10colorfont extends React.Component{
    onColorFont(event){
        event.preventDefault();
        if(this.props.onColorFont){
            const value = this.input.value;
            this.props.onColorFont(value);
        }
    }

    render(){return(
        <ul>
        <li className="number inline">10 <i className="fa fa-arrow-right" aria-hidden="true"></i></li>
        <li className="form-submit inline">
        <div action="submit">
        <div>Is there any color or font styles in mind that would be the best to describe your business's brand'?</div>
        <input type="text" id="color-fonts" className="input-long-line" placeholder="Optional" ref={input => this.input = input}/>
        <div className="enter-button" onClick={e=>this.onColorFont(e)}>Enter</div>
        </div>
        </li>
        </ul>

    );
}
}
