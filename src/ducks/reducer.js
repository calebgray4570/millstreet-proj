import axios from 'axios'

const initialState = {
    featData: [],
    artist:[],
    artistData: {},
    editData: {},
    emailData: {},
    sentEmailData: {}
}

const GET_FEAT = 'GET_FEAT'
const GET_ARTIST = 'GET_ARTIST'
const ADD_ARTIST = 'ADD_ARTIST'
const EDIT_ARTIST = 'EDIT_ARTIST'
const ADD_EMAIL = 'ADD_EMAIL'
const SEND_EMAIL = 'SEND_EMAIL'

export function getFeat() {
    const featInfo = axios.get('/featured')
        .then( res => res.data )
        return {
        type: GET_FEAT,
        payload: featInfo
        } 
} 

export function getArtist(){
    const artistInfo = axios.get('/getArtist')
        .then( res => res.data )
        return {
        type: GET_ARTIST,
        payload: artistInfo
        }
}

export function addArtist(artistData){
    console.log(artistData)
    let newArtist = axios.post('/addBand', artistData)
        .then( res => res.data )
        console.log(newArtist)
        return {
            type: ADD_ARTIST,
            payload: newArtist
        }
}

export function editArtist(artistURL, editedData ){
    let editedArtist = axios.put( `/editArtist/${artistURL}`, editedData)
        .then( res => res.data )
        return {
            type: EDIT_ARTIST,
            payload: editedArtist
        }
}

export function addEmail(emailData){
    let sentEmail= axios.post('/addEmail', emailData)
        .then( res => res.data )
        return {
            type: ADD_EMAIL,
            payload: sentEmail
        }
}

export function sendEmail( sentEmailData ){
    let email = axios.post('/sendEmail', sentEmailData)
        .then ( res => res.data )
            return {
                type: SEND_EMAIL,
                payload: email
            }
}




export default function reducer( state = initialState, action ){
    switch (action.type) {
        case GET_FEAT + '_FULFILLED':
            return Object.assign({}, state, { featData: action.payload} )

        case ADD_ARTIST + '_FULFILLED':
            return Object.assign({}, state, { artistData: action.payload } )

        case GET_ARTIST + '_FULFILLED':
            return Object.assign({}, state, { artist: action.payload })

        case EDIT_ARTIST + '_FULFILLED':
            return Object.assign({}, state, { editData: action.payload.data})
        
        case ADD_EMAIL + '_FULFILLED':
            return Object.assign({}, state, { emailData: action.payload})
        
        case SEND_EMAIL + '_FULFILLED':
            return Object.assign( {}, state, { sentEmailData: action.payload})

        default:
            return state;

    }
}

