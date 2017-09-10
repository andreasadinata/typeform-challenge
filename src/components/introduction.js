import React from 'react';
import './introduction.css';

export default class Introduction extends React.Component{
    onNextSection(event){
        event.preventDefault();
        if(this.props.onNextSection){
            this.props.onNextSection();
        }
    }
    render(){return(
        <section className="introduction">
        <div className="table"><div className="aligning">
        <img src={require('../images/intro-image.png')} alt="intro-image"/>
            <h1>Branding Questionnaire</h1>
            <p>Let us capture your vision and values so we can help you build a vibrant brand identity.</p>
        <div className="start" onClick={e => this.onNextSection(e)}>Start</div>
            </div>
            </div>
        </section>

    );
    }
}
