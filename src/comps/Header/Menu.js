import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover/Popover';
import {Menu, MenuItem} from 'material-ui/Menu';
import {Link} from 'react-router-dom'

import styled from 'styled-components'


const styles = {
    RaisedButton: {
        marginTop: 30,
    }
  };

export default class MobileMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
           open: false
        }
    }


    handleClick = (event) => {
        // This prevents ghost click.
        event.preventDefault();
    
        this.setState({
          open: true,
          anchorEl: event.currentTarget,
        });
      };

    
    handleRequestClose = () => {
        this.setState({
          open: false,
        });
      };
    




    render() {
        return(
            <Wrapper>
            
            <div>
                <RaisedButton 
                    style={styles.RaisedButton}
                    onClick={this.handleClick}label="MENU" />

                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'middle', vertical: 'top'}}
                    onRequestClose={this.handleRequestClose}
                    animation={PopoverAnimationVertical}>

                    <Menu>
                        <Link to='/'><MenuItem primaryText="HOME" /></Link>
                        <Link to='/bands'><MenuItem primaryText="ACTS" /></Link>
                        <Link to='/contact'><MenuItem primaryText="CONTACT" /></Link>
                    </Menu>
                </Popover>
            </div>
            </Wrapper>
        )
    }
}

const Wrapper = styled.section`
    position: static;
`