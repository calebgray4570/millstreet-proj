import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import './Edit.css'

import {editArtist} from '../../ducks/reducer'

import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'
import MenuItem from 'material-ui/MenuItem'
import { DropDownMenu } from 'material-ui/DropDownMenu';

import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'



const styles = {
  customWidth: {
    width: 300,
  }
}

class Edit extends Component {
  constructor(){
    super()
    this.state={
      artist: '',
      name: '',
      info: '',
      img: '',
      video: '',
      featured: false
    }

    this.artistToState = this.artistToState.bind(this)
    this.editArtist = this.editArtist.bind(this)
    this.deleteArtist = this.deleteArtist.bind(this)
    this.featuredToggle = this.featuredToggle.bind(this)
  }

  artistToState( e ){
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

  featuredToggle(e){
    if( e.target.id === 'feat'){
      this.setState({
        featured: !this.state.featured
      })
    }
  }

  editArtist(){
    const artistURL = this.props.match.params.artistName
    
    let { name, info, img, video, featured } = this.state
    this.props.editArtist( artistURL, { name, info, img, video, featured })
    this.props.history.push('/bands')
  }

  deleteArtist(){
    const artistURL = this.props.match.params.artistName
    
    axios.delete(`/deleteArtist/${artistURL}`)
      .then(res => this.props.history.push('/bands'))
  }

  componentWillMount(){

    const artistURL = this.props.match.params.artistName
    
    axios.get(`/getArtist/${ artistURL }`)
      .then( artist => {  
        this.setState({
          name: artist.data[0].name,
          info: artist.data[0].info,
          img: artist.data[0].img,
          video: artist.data[0].video,
          featured: artist.data[0].featured


        })
      })
  }

  
  
  render () {
    console.log(this.state.artist && this.state.artist)
    
    return (
         <div className="Edit">

            <Header/>

            <div className='edit_div'>
                <h1>Edit Profile</h1>
                <p id='white_line2'></p> 
            </div>
            
            <div className='edit_container'>
            
              <h1>NAME</h1>
              <TextField id='name'  onChange={(e) => this.artistToState(e)} value={this.state.name} />
                          
              <h1>BIO</h1>
              <TextField 
                multiLine={true}
                fullWidth={true}
                rows={8}
                id='bio' onChange={(e) => this.artistToState(e)} value={this.state.info}/>
            
              <h1>Image URL</h1>
              <TextField id='img' onChange={(e) => this.artistToState(e)} value={ this.state.img} />
            
              <h1>Video Link</h1>
              <TextField id='vid' onChange={(e) => this.artistToState(e)} value={this.state.video} />

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
              <Toggle toggled={this.state.featured} onToggle={this.featuredToggle} id='feat' />

              <button onClick={this.editArtist} >UPDATE ARTIST</button>
              <button onClick={this.deleteArtist}>DELETE ARTIST</button>
            
            </div>
            
            
            
           
            <Footer/>  
        
        </div>
    );
  }
}

function mapStateToProps( state ){
  return state
  
}

export default connect( mapStateToProps, {editArtist} ) ( Edit );