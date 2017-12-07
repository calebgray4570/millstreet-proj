import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Contact.css'

import TextField from 'material-ui/TextField'

import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'

import {addEmail} from '../../ducks/reducer'
import {sendEmail} from '../../ducks/reducer'


class Contact extends Component {
  constructor(){
    super()
    this.state={
      name:'',
      email:'',
      phone:'',
      message:''
    }
    this.emailToState = this.emailToState.bind(this)
    this.addEmail = this.addEmail.bind(this)
    this.sendEmail = this.sendEmail.bind(this)
  }

  emailToState(e){
    if( e.target.id === 'name'){
      this.setState({
        name: e.target.value
      })
    } else if ( e.target.id === 'email'){
      this.setState({
        email: e.target.value
      })
    } else if ( e.target.id === 'phone'){
      this.setState({
        phone: e.target.value
      })
    } else if ( e.target.id === 'message'){
      this.setState({
        message: e.target.value
      })
    }
    // console.log(e.target.value)
  }

  addEmail(){
    let {name, email, phone, message } = this.state
    this.props.addEmail({ name, email, phone, message })
      this.setState({
        name:'',
        email:'',
        phone:'',
        message:''
      })
  }

  sendEmail(){
    let { name, email, phone, message } = this.state
    this.props.sendEmail({ name, email, phone, message })
    this.props.history.push('/bands')
      this.setState({
        name:'',
        email:'',
        phone:'',
        message:''
     })
  }

  
  render () {
    return (
         <div className="contact">
            <Header/>

            <div className='contact_div'>
              <h1>CONTACT US</h1>
              <p id='white_line2'></p>
            </div> 

            <div className='contact_container'>

              <h1>NAME</h1>
              <TextField id='name' onChange={this.emailToState} value={this.state.name}/>
              
              <h1>EMAIL</h1>
              <TextField id='email' onChange={this.emailToState} fullWidth={false} value={this.state.email}/>

              <h1>PHONE</h1>
              <TextField id='phone' onChange={this.emailToState} value={this.state.phone}/>

              <h1>MESSAGE</h1>
              <TextField id='message' onChange={this.emailToState} value={this.state.message}/>

              <button onClick={this.sendEmail}>SEND</button>

            </div>

            <Footer/>
        </div>
    );
  }
}

function mapStateToProps( state ){
  return state
}

export default connect( mapStateToProps, {addEmail, sendEmail} ) ( Contact );