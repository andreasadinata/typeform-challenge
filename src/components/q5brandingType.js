import React from 'react';
import './q5toq8.css';
import Scroll from 'react-scroll';
let scroller = Scroll.scroller;




export default class Q5brandingType extends React.Component{
    onBrandingType(event, type){
        event.preventDefault();
        if(this.props.onBrandingType){
            const value = type;
            this.props.onBrandingType(value);
        }
        scroller.scrollTo('q6',{smooth:true})
    }

    render(){return(
        <ul>
        <li className="number inline">5 <i className="fa fa-arrow-right" aria-hidden="true"></i></li>
        <li className="form-submit inline">
        <div>What are you branding?</div>
        <ul className="box-choices">
        <li onClick={e=>this.onBrandingType(e,'company')}>
        <div className="img-wrapper">
        <img src={require("../images/company.png")} alt="company"/>
        </div>
        <div className="information">
        <p className="square-box">A</p><span>Company</span>
        </div>
        </li>
        <li onClick={e=>this.onBrandingType(e,'product')}>
        <div className="img-wrapper">
            <img src={require("../images/product.png")} alt="product"/>
        </div>
        <div className="information">
        <p className="square-box">B</p><span>Product</span>
        </div>
        </li>
        <li onClick={e=>this.onBrandingType(e,'service')}>
        <div className="img-wrapper">
        <img src={require("../images/service.png")} alt="service"/>
        </div>
        <div className="information">
        <p className="square-box">C</p><span>Service</span>
        </div>
        </li>
        </ul>
        </li>
        </ul>
    )
}
}
