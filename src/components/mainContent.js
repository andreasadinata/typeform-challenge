import React from 'react';
import Q1name from './q1name';
import CollectionOfQuestions from './collectionOfQuestions'
import './mainContent.css';

export default class MainContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            openTheRest : false,
            name: '',
            industry:'',
            value:'',
            advantage:'',
            brandingType:'',
            ageTarget:'',
            fiveWords:'',
            colorFont:'',
            additionalInfo:'',
            emailAddress:''
        }
    }

    NameInputted(value){
        if(!this.state.openTheRest){
            this.setState({
                openTheRest: !this.state.openTheRest,
                name: value
            })
        }
        else{
            this.setState({
                name: value
            })
        }
    }

    render(){
        let theRest;
        if(this.state.openTheRest){
        theRest = <CollectionOfQuestions name={this.state.name} onIndustry={(value)=>this.setState({industry: value})} onValue={(value)=>this.setState({value: value})}
        onAdvantage={(value)=>this.setState({advantage: value})} onFiveWords={(value)=>this.setState({fiveWords: value})} onColorFont={(value)=>this.setState({colorFont: value})}
        onAdditionalInfo={(value)=>this.setState({additionalInfo: value})} onEmailAddress={(value)=>this.setState({emailAddress: value})}
        onBrandingType={(value)=>this.setState({brandingType: value})} onAgeTarget={(value)=>this.setState({ageTarget: value})}
        />
        }
        console.log(this.state);
        return(
        <section className="main-content">
            <ul>
            <li className="questions" ><Q1name onName={(value)=>this.NameInputted(value)}/></li>
            <li className="questions" >{theRest}</li>
            </ul>
        </section>

    );
    }
}
