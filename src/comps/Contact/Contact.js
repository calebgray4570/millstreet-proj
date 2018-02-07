import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Contact.css'
import './Contact_res.css'

import TextField from 'material-ui/TextField'
import {grey50 } from 'material-ui/styles/colors'

import mill_logo from '../../media/millstreet_words.pngf.jpg'
import phone_icon from '../../media/phone-icon.png'

import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'

import {addEmail} from '../../ducks/reducer'
import {sendEmail} from '../../ducks/reducer'

const styles = {
  floatingLabelFocusStyle: {
    color: grey50,
  },
  floatingLabelStyle: {
    color: grey50,
    
  },
  underlineStyle: {
    borderColor: grey50,
  },
  errorStyle: {
    color: grey50,
  }
}


class Contact extends Component {
  constructor(){
    super()
    this.state={
      name:'',
      email:'',
      phone:'',
      message:'',
      emailFlag: false
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
        message:'',
        emailFlag: true
     })
  }

  
  render () {
      // let showEmail = () => {
      //   if ( this.state.emailFlag )
      //     return (
      //       <div className='email-thank'>
      //         <h3>THANK YOU!</h3> 
      //         <h3> You'll hear from us soon!</h3>
      //       </div>
      //     )
      // }

    return (
         <div className="contact">
            <Header/>

            <div className='contact_div'>
              <h1>CONTACT US</h1>
              <p id='white_line2'></p>
            </div> 

            <div className='flex_div'>

              <div className='contact_container'>

                <TextField
                  floatingLabelText='NAME'
                  multiLine={true}
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  hintStyle={styles.errorStyle}
                  id='name' onChange={this.emailToState} value={this.state.name}/>
                
                <TextField
                  floatingLabelText='EMAIL'
                  multiLine={true}
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  id='email' onChange={this.emailToState} fullWidth={false} value={this.state.email}/>

                
                <TextField 
                  multiLine={true}
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelText='PHONE' 
                  id='phone' onChange={this.emailToState} value={this.state.phone}/>

                <TextField
                  multiLine={true}
                  fullWidth={true}
                  rows={10} 
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelText='MESSAGE'  
                  id='message' onChange={this.emailToState} value={this.state.message}/>

                <button onClick={this.sendEmail}>SEND</button>

              </div>

              <div className='millstreet_container'>
                <img id='logo' src={mill_logo} alt=''/>
                <img id='phone' src={phone_icon} alt=''/>
                <h1>CALL & BOOK TODAY!</h1>
                <p></p>
                <h2>615-481-2216</h2>
              </div>

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