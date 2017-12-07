import React from 'react'
// import {Link} from 'react-router-dom'
import './Footer.css'


export default function Footer() {
        return (
            <nav>

                <div className='footer'>
                    <div className='login_div'>
                    <a href={ process.env.REACT_APP_LOGIN }><button>Admin Login</button></a>
                    <a href='http://localhost:3005/auth/logout'><button>Admin Logout</button></a>
                    </div>
                    <h2>Copyright © 2017 Mill Street Entertainment LLC</h2>
                </div>
            
            </nav>
        )
    
}