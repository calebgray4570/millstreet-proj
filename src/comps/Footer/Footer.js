import React, { Component } from 'react'
import axios from 'axios'
import './Footer.css'
import './Footer_res.css'

import mill_logo from '../../media/millstreet_logo_trans.png'
import concert_img from '../../media/concert.png'
import toolkit_logo from '../../media/logo-musicians-toolkit.png'
import facebook_icon from '../../media/facebook_icon.jpg'
import phone_icon from '../../media/phone-icon.png'

export default class Footer extends Component {
    constructor(){
        super()
        this.state={
            adminInfo: undefined
        }
    }
    componentDidMount(){
        axios.get('/auth/me')
        .then(res => {
          this.setState({
            adminInfo: res.data
          })
        })
    }
    
    render(){
        return (
         <nav>
         
            <div className='img_container'>
                <img id='background_img' src={concert_img} alt=''/>
            </div>

            <div className='footer'>
                <p></p>

                <div className='logo_div'>

                    <img id='tool' src={toolkit_logo} alt=''/>
                    <img id='mill' src={mill_logo} alt=''/>

                    <div className='call_div'>
                        <img id='phone' src={phone_icon} alt=''/>
                        <h1>CALL US!</h1>
                        <h1>615-481-2216</h1>
                    </div>

                    <div className='facebook_div'>
                        <h1>LIKE US ON FACEBOOK!</h1>
                        <a href={'https://www.facebook.com/MillstreetEnt/'}><img id='facebook' src={facebook_icon} alt=''/></a>
                    </div>

                </div>

                <p></p>
                
               <div className='login_div'>
                  { !this.state.adminInfo ?
                      <a href={ process.env.REACT_APP_LOGIN }><button>Admin Login</button></a> : null }

                  { this.state.adminInfo ?
                      <a href={ process.env.REACT_APP_LOGOUT }><button>Admin Logout</button></a> : null }
                </div>
                    <h2>Copyright © 2017 Mill Street Entertainment LLC</h2>
            </div>
                
        </nav>
            )
        }
        
    
}