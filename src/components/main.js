import React from 'react';
import Introduction from './introduction';
import MainContent from './mainContent';


export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            openMainContent : false
        }
    }
    toggleNextSection(){
        this.setState({
            openMainContent: !this.state.openMainContent
        })
    }
    render (){
        let section;
        if(this.state.openMainContent){
            section = <MainContent/>;
        }
        else{
            section =<Introduction onNextSection={()=>this.toggleNextSection()}/>
        }

        return(
        <main>
            {section}
        </main>
    )
    };
};
