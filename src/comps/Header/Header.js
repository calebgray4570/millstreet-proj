import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

import crowd_vid from './concert_video.mp4';
import mill_logo from './millstreet_logo.png';
import hamburger from './hamburger.png';

export default function Header() {
        return (
            <nav>
                <div className='video-container'>
                    <video autoPlay loop id="video-background" plays-inline='true'>
                    <source src={crowd_vid}/>
                    </video>
                </div>


                <div className= 'header'>

                    <img src={mill_logo} alt='charley-logo' />
                    <h1 id='millstreet'>MILL STREET ENTERTAINMENT</h1>
                    <h1 className='element'>Any Artist | Any Budget | Anywhere</h1>
                    <img src={hamburger} alt='hamburger' id='hamburger'/>
                
                        <p></p>
                
                    <div className='nav_div'>
                
                        <Link  to='/'><button id='one'>HOME</button></Link>
                        <Link to='/bands'><button id='one'>BANDS</button></Link>
                        <Link to='/contact'><button id='one'>CONTACT</button></Link>
                
                    </div>
                
                    <p></p>
                
                </div> 
            
            </nav>
        )
    
}


