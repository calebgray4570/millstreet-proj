import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AddBand.css'


import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'
import MenuItem from 'material-ui/MenuItem'
import { DropDownMenu } from 'material-ui/DropDownMenu';


import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'

import {addArtist} from '../../ducks/reducer.js'

const styles = {
  customWidth: {
    width: 300,
  }
}

class AddBand extends Component {
  constructor(){
    super()
    this.state={
      name: '',
      info: '',
      img: '',
      video: ''
    }
    this.updateArtist = this.updateArtist.bind(this)
    this.addArtist = this.addArtist.bind(this)
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
     }else if ( e.target.id === 'img'){
       this.setState({
         img: e.target.value
       })
     }else if (e.target.id === 'vid'){
       this.setState({
         video: e.target.value
       })
     }
  }

  addArtist(){
    let { name, info, img, video} = this.state
    this.props.addArtist({ name, info, img, video })
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

              <h1>NAME</h1>
              <TextField
              id='name' onChange= {this.updateArtist}/>
              
              <h1>BIO</h1>
              <TextField  
              multiLine={true}
              fullWidth={false}
              rows={8}  
                id='bio' onChange= {this.updateArtist} />

              <h1>Image URL</h1>
              <TextField id='img' onChange= {this.updateArtist}/>

              <h1>Video Link</h1>
              <TextField id='vid' onChange= {this.updateArtist}/>

              <h1>GENRE</h1>
              <DropDownMenu
                style={styles.customWidth}>
                <MenuItem value={1} label='Country' primaryText='Country'/>
                <MenuItem value={2} primaryText='Rock'/>
                <MenuItem value={3} primaryText='Classic-Rock'/>
                <MenuItem value={4} primaryText='Pop'/>
                <MenuItem value={5} primaryText='Bluegrass'/>
                <MenuItem value={6} primaryText='Alternative'/>
                <MenuItem value={7} primaryText='R&B'/>
              </DropDownMenu>

              <h1>Featured Artist?</h1>
              <Toggle/>


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