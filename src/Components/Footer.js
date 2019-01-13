import React, { Component } from 'react';
import './Styles/footer.css';
import axios from 'axios';
import croutong from './Images/Croutongrey.png';

export default class Footer extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    }
    this.handleInputs = this.handleInputs.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleInputs(e){
    if(e.currentTarget.name === "name"){
    this.setState({name:e.currentTarget.value});
    }
    if(e.currentTarget.name === "email"){
    this.setState({email:e.currentTarget.value});
    }
    if(e.currentTarget.name === "message"){
    this.setState({message:e.currentTarget.value});
    }
  }

  submit(){
    if(this.state.name && this.state.email && this.state.message){
      const url = `https://ihs1nx5rt6.execute-api.us-east-1.amazonaws.com/crouton`;
      const body= JSON.stringify({
        "appID": "mr-6403074608",
        "name": this.state.name,
        "email": this.state.email,
        "message": this.state.message
      });
      console.log(body);
    axios.post(url,body,{
      headers: {
        'Content-Type': 'application/json'
      }}).then(response => this.setState({name:"", email:"", message:"", statusText: "Submitted Successfully"}))
           .catch(error => this.setState({statusText: "Error Occured while submitting"}));

  } else {
    this.setState({statusText: "Please Enter all fields"});
    }
  }


  render(){
    return(
      <div className="footer">
        <div className="footerLeft">
          <h1 className="footerLeftHeading">Contact Us-</h1>
          <h1 className="footerLeftText"> We love to work.</h1>
        </div>
        <div className="footerRight">
          <input className="footerRightInputName" name="name" type="text" placeholder="your name" value={this.state.name} onChange={this.handleInputs} /> &nbsp;
          <input className="footerRightInputEmail" name="email" type="email" placeholder="your email" value={this.state.email} onChange={this.handleInputs} /><br/>
          <input className="footerRightInputMessage" name="message" type="text" placeholder="your message" value={this.state.message} onChange={this.handleInputs} /> <br/><br/>
          <button onClick={this.submit} className="Button"> GET IN TOUCH <span className="ButtonArrow"> &rarr;</span> </button>
        </div>
        <div>
          <div className="footerBottom">
          <img className="footerBottomImg" src={croutong} alt="Crouton" width="30" height="8"/> &nbsp;
          <p className="footerBottomCopyright"> &copy;2017 Crouton All Rights Reserved  </p>
          </div>
        </div>
      </div>
    );
  }
}
