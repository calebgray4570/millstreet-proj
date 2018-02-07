import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import './Header_res.css'

import MobileMenu from './Menu'

import styled from 'styled-components'

import crowd_vid from './concert_video.mp4';
import mill_logo from '../../media/millstreet_logo.png';
// import hamburger from './hamburger.png';

// import IconMenu from 'material-ui/IconMenu'
// import MenuItem from 'material-ui/MenuItem'
// import IconButton from 'material-ui/IconButton'
// import MenuIcon from 'material-ui/svg-icons/navigation/menu'


export default function Header() {
        return (
            <nav className='main_header'>
                <div id='vid_container' className='video-container'>
                    <video autoPlay loop id="video-background" plays-inline='true'>
                    <source src={crowd_vid}/>
                    </video>
                </div>


                <div id='header' className= 'header'>

                    <img id='mill-logo' src={mill_logo} alt='charley-logo' />
                    <h1 id='millstreet'>MILL STREET ENTERTAINMENT</h1>
                    <h1 id='slogan' className='element'>Any Artist | Any Budget | Anywhere</h1>

                    <Wrapper>
                        <MobileMenu id="mobile_menu"/>
                    </Wrapper>
                
                    <div className='nav_div'>
                
                        <Link  to='/'><button id='one'>HOME</button></Link>
                        <Link to='/bands'><button id='one'>ACTS</button></Link>
                        <Link to='/contact'><button id='one'>CONTACT</button></Link>
                
                    </div>
                
                    <p id='p2'></p>
                
                </div> 
            
            </nav>
        )
    
}

const Wrapper = styled.section`
    display: none;

    @media (max-width: 375px) {
        display: flex;
        position: sticky;
        overflow: hidden;
    }

`;


