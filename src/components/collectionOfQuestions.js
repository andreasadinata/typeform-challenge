import React from 'react';
import Paragraph from './paragraph';
import Q2industry from './q2industry';
import Q3value from './q3value';
import Q4advantage from './q4advantage';
import Q5brandingType from './q5brandingType';
import Q6genderTarget from'./q6genderTarget';
import Q7ageTarget from'./q7ageTarget'
import Q8incomeTarget from'./q8incomeTarget'
import Q9fivewords from'./q9fivewords';
import Q10colorfont from'./q10colorfont';
import Q11additionalInfo from'./q11additionalInfo';
import Q12emailAddress from'./q12emailAddress';
import Scroll from 'react-scroll';
let Element    = Scroll.Element;



export default function CollectionOfQuestions(props){
    return(
        <ul>
        <Element name="paragraph" className="element"></Element>
            <li className="questions"><Paragraph name={props.name}/></li>
            <li className="questions"><Q2industry onIndustry={props.onIndustry}/></li>
        <Element name="q3" className="element"></Element>
            <li className="questions"><Q3value onValue={props.onValue}/></li>
        <Element name="q4" className="element"></Element>
            <li className="questions"><Q4advantage name={props.name} onAdvantage={props.onAdvantage}/></li>
        <Element name="q5" className="element"></Element>
            <li className="questions"><Q5brandingType onBrandingType={props.onBrandingType}/></li>
        <Element name="q6" className="element"></Element>
            <li className="questions"><Q6genderTarget onGenderTarget={props.onGenderTarget}/></li>
        <Element name="q7" className="element"></Element>
            <li className="questions"><Q7ageTarget name={props.name} onAgeTarget={props.onAgeTarget}/></li>
        <Element name="q8" className="element"></Element>
            <li className="questions"><Q8incomeTarget onIncomeTarget={props.onIncomeTarget}/></li>
        <Element name="q9" className="element"></Element>
            <li className="questions"><Q9fivewords name={props.name} onFiveWords={props.onFiveWords}/></li>
        <Element name="q10" className="element"></Element>
            <li className="questions"><Q10colorfont onColorFont={props.onColorFont}/></li>
        <Element name="q11" className="element"></Element>
            <li className="questions"><Q11additionalInfo onAdditionalInfo={props.onAdditionalInfo}/></li>
        <Element name="q12" className="element"></Element>
            <li className="questions"><Q12emailAddress name={props.name} onEmailAddress={props.onEmailAddress}/></li>
        </ul>
    )
}
