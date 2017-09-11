import React from 'react';
import {scroller} from 'react-scroll';

export default class Q10colorfont extends React.Component{
    onColorFont(event){
        event.preventDefault();
        if(this.props.onColorFont){
            const value = this.input.value;
            this.props.onColorFont(value);
        }
        scroller.scrollTo('q11',{smooth:true})
    }

    render(){return(
        <ul>
        <li className="number inline">10 <i className="fa fa-arrow-right" aria-hidden="true"></i></li>
        <li className="form-submit inline">
        <form onSubmit={e=>this.onColorFont(e)} action="submit">
        <div>Is there any color or font styles in mind that would be the best to describe your business's brand'?</div>
        <input type="text" id="color-fonts" className="input-long-line" placeholder="Optional" ref={input => this.input = input}/>
        <button className="enter-button" >Enter</button>
        </form>
        </li>
        </ul>

    );
}
}
