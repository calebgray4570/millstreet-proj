import React, { Component } from 'react'
import axios from 'axios'
import './Footer.css'

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
            <div className='footer'>
               <div className='login_div'>
                  { !this.state.adminInfo ?
                      <a href={ process.env.REACT_APP_LOGIN }><button>Admin Login</button></a> : null }

                  { this.state.adminInfo ?
                      <a href='http://localhost:3005/auth/logout'><button>Admin Logout</button></a> : null }
                </div>
                    <h2>Copyright © 2017 Mill Street Entertainment LLC</h2>
            </div>
                
        </nav>
            )
        }
        
    
}