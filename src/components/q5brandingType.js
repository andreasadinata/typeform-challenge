import React from 'react';
import './q5toq8.css'


export default class Q5brandingType extends React.Component{
    onBrandingType(event){
        event.preventDefault();
        if(this.props.onBrandingType){
            const value = this.input.value;
            this.props.onBrandingType(value);
        }
    }

    render(){return(
        <ul>
        <li className="number inline">5 <i className="fa fa-arrow-right" aria-hidden="true"></i></li>
        <li className="form-submit inline">
        <div>What are you branding?</div>
        <ul className="box-choices">
        <li>
        <div className="img-wrapper">
        <img src={require("../images/company.png")} alt="company"/>
        </div>
        <input type="hidden" type="text" value="company" hidden/>
        <div className="information">
        <p className="square-box">A</p><span>Company</span>
        </div>
        </li>
        <li>
        <div className="img-wrapper">
            <img src={require("../images/product.png")} alt="product"/>
        </div>
        <input type="hidden" type="text" value="product" hidden/>
        <div className="information">
        <p className="square-box">B</p><span>Product</span>
        </div>
        </li>
        <li>
        <div className="img-wrapper">
            <img src={require("../images/service.png")} alt="service"/>
        </div>
        <input type="hidden" type="text" value="service" hidden/>
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
