import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import Q1name from './q1name';
import CollectionOfQuestions from './collectionOfQuestions'
import Footer from './footer';
import Thankyou from './thankyou'
import './mainContent.css';

export default class MainContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            thankyou: false,
            openTheRest : false,
            percentage:0,
            name: '',
            industry:'',
            value:'',
            advantage:'',
            brandingType:'',
            ageTarget:'',
            genderTarget:'',
            incomeTarget:'',
            fiveWords:'',
            colorFont:'',
            additionalInfo:'',
            emailAddress:''
        }
    }


    NameInputted(value){
        let count = this.state.percentage + 10;
        if(!this.state.openTheRest){
            this.setState({
                openTheRest: !this.state.openTheRest,
                name: value,
                percentage: count
            })
        }
        else if(this.state.name===''){
            this.setState({
                name: value,
                percentage: count
            });
        }else this.setState({name: value});
    }
    IndustryInputted(value){
        let count = this.state.percentage + 10;
        if(this.state.industry===''){
            this.setState({
                industry:value,
                percentage: count
            })
        }else this.setState({industry: value});
    }
    ValueInputted(value){
        let count = this.state.percentage + 10;
        if(this.state.value===''){
            this.setState({
                value:value,
                percentage: count
            })
        }else this.setState({value: value});
    }
    AdvantageInputted(value){
        let count = this.state.percentage + 10;
        if(this.state.advantage===''){
            this.setState({
                advantage:value,
                percentage: count
            })
        }else this.setState({advantage: value});
    }
    FiveWordsInputted(value){
        let count = this.state.percentage + 10;
        if(this.state.fiveWords===''){
            this.setState({
                fiveWords:value,
                percentage: count
            })
        }else this.setState({fiveWords: value});
    }
    EmailAddressInputted(value){
        let count = this.state.percentage + 10;
        if(this.state.emailAddress===''){
            this.setState({
                emailAddress:value,
                percentage: count
            })
        }else this.setState({emailAddress: value});
    }
    BrandingTypeInputted(value){
        let count = this.state.percentage + 10;
        if(this.state.brandingType===''){
            this.setState({
                brandingType:value,
                percentage: count
            })
        }else this.setState({brandingType: value});
    }
    GenderTargetInputted(value){
        let count = this.state.percentage + 10;
        if(this.state.genderTarget===''){
            this.setState({
                genderTarget:value,
                percentage: count
            })
        }else this.setState({genderTarget: value});
    }
    AgeTargetInputted(value){
        let count = this.state.percentage + 10;
        if(this.state.ageTarget===''){
            this.setState({
                ageTarget:value,
                percentage: count
            })
        }else this.setState({ageTarget: value});
    }
    IncomeTargetInputted(value){
        let count = this.state.percentage + 10;
        if(this.state.incomeTarget===''){
            this.setState({
                incomeTarget:value,
                percentage: count
            })
        }else this.setState({incomeTarget: value});
    }



    render(){
        let theRest;
        let open;
        let firstQuestion;
        if(this.state.openTheRest){
            theRest = <CollectionOfQuestions name={this.state.name} onIndustry={(value)=>this.IndustryInputted(value)} onValue={(value)=>this.ValueInputted(value)}
            onAdvantage={(value)=>this.AdvantageInputted(value)} onFiveWords={(value)=>this.FiveWordsInputted(value)} onColorFont={(value)=>this.setState({colorFont: value})}
        onAdditionalInfo={(value)=>this.setState({additionalInfo: value})} onEmailAddress={(value)=>this.EmailAddressInputted(value)}
        onBrandingType={(value)=>this.BrandingTypeInputted(value)} onGenderTarget={(value)=>this.GenderTargetInputted(value)}
        onAgeTarget={(value)=>this.AgeTargetInputted(value)} onIncomeTarget={(value)=>this.IncomeTargetInputted(value)}
        />
        }else firstQuestion =<li className="questions" ><Q1name onName={(value)=>this.NameInputted(value)}/></li>
        if(!this.state.thankyou){
            open = <ul> {firstQuestion}
                <li className="questions" ><CSSTransitionGroup  transitionName="main"
                transitionEnterTimeout={500} transitionLeaveTimeout={500}>{theRest}</CSSTransitionGroup></li>
                    <Footer percentage={this.state.percentage} onThankyou={(value)=>this.setState({thankyou:value})}/></ul>
        }else open = <Thankyou/>
        return(
        <section className="main-content">
            <div>
                {open}
            </div>
        </section>

    );
    }
}
