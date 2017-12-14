import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AddBand.css'


import TextField from 'material-ui/TextField'
import {grey50 } from 'material-ui/styles/colors'

import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'

import {addArtist} from '../../ducks/reducer.js'

const styles = {
  customWidth: {
    width: 300,
  },
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
  },
  selectedMenuItemStyle: {
    color: grey50,
  }
}

class AddBand extends Component {
  constructor(props){
    super(props)
    this.state={
      name: '',
      info: '',
      img: '',
      video: '',
    }
    this.updateArtist = this.updateArtist.bind(this)
    this.addArtist = this.addArtist.bind(this)
    this.onDrop = this.onDrop.bind(this)
  }


  updateArtist(e){
     if(e.target.id === 'name'){
       this.setState({
         name: e.target.value
       })
     }else if (e.target.id === 'bio'){
       this.setState({
         info: e.target.value
       })
     }else if (e.target.id === 'vid'){
       this.setState({
         video: e.target.value
       })
     }
  }

  onDrop( e ) {
    let fileReader = new FileReader()
    fileReader.onload = ( photo ) => {
      console.log( photo )
      this.setState({
        img: photo.target.result
      })
    } 
    fileReader.readAsDataURL( e.target.files[0] )
    
  }

  addArtist(){
    let { name, info, img, video} = this.state
    this.props.addArtist({ name, info, img, video })
    this.props.history.push('/bands')
  }


  render () {
    return (
         <div className="AddBand">
            <Header/>

            <div className='contact_div'>
              <h1>ADD ARTIST</h1>
              <p id='white_line2'></p>
            </div> 

            <div className='contact_container'>

              <TextField
              floatingLabelText='NAME'
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              underlineFocusStyle={styles.underlineStyle}
              hintStyle={styles.errorStyle}
              id='name' onChange= {this.updateArtist}/>
              
              <TextField  
              floatingLabelText='BIO'
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              underlineFocusStyle={styles.underlineStyle}  
              hintStyle={styles.errorStyle}      
              multiLine={true}
              fullWidth={true}
              rows={8} 
              underlineShow={true}
              id='bio' onChange= {this.updateArtist}/>

              
              <input
                type='file'
                onChange={this.onDrop}
                />

              { this.state.img && <img src={this.state.img} alt='' />}
              
              

              <TextField 
                floatingLabelText='YOUTUBE LINK'
                floatingLabelStyle={styles.floatingLabelStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                underlineFocusStyle={styles.underlineStyle}  
                hintStyle={styles.errorStyle}
                id='vid' onChange= {this.updateArtist}/>

              {/*<DropDownMenu
                id='genre'
                style={styles.customWidth}
                >
                <MenuItem value={1} label='Country' primaryText='Country'/>
                <MenuItem value={2} primaryText='Rock'/>
                <MenuItem value={3} primaryText='Classic-Rock'/>
                <MenuItem value={4} primaryText='Pop'/>
                <MenuItem value={5} primaryText='Bluegrass'/>
                <MenuItem value={6} primaryText='Alternative'/>
                <MenuItem value={7} primaryText='R&B'/>
              </DropDownMenu>*/}

              <button onClick = {this.addArtist}>ADD ARTIST</button>

            </div>

            <Footer/>
            
            </div>
        );
      }
    }
    
    function mapStateToProps( state ){
      return state
    }
    
    export default connect( mapStateToProps, {addArtist} ) ( AddBand );