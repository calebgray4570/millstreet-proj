const express = require('express')
      bodyParser = require('body-parser')
      cors = require('cors')
      session = require('express-session')
      passport = require('passport')
      OAuthStrategy = require('passport-auth0')
      massive = require('massive')
require('dotenv').config()

const featured_controller = require('./controllers/featured_controller')
const artist_controller = require('./controllers/artist_controller')
const contact_controller = require('./controllers/contact_controller')
const auth_controller = require('./controllers/auth_controller')

const app = express()
app.use(bodyParser.json() )
app.use(cors())

massive(process.env.DB_CONNECTION).then( db => {
    app.set( 'db', db)
})

app.use( session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false
}))
// app.use(express.static(__dirname + '/../build'))

app.use(passport.initialize())
app.use(passport.session())

passport.use( new OAuthStrategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, function( accessToken, refreshToken, extraParams, profile, done){
    done(null, profile )
}))


app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/bands',
    failureRedirect: 'http://localhost:3000/#/'
}))

passport.serializeUser(function( profile, done){
    done(null, profile) 
})

passport.deserializeUser( function( profile, done ){
    done( null, profile)
})


app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/bands',
    failureRedirect: 'http://localhost:3000/#/'
}))

app.get('/auth/logout', auth_controller.logout)

app.get('/featured', featured_controller.readAll)

app.get('/getArtist', artist_controller.readArtist )
app.get('/getArtist/:artistName', artist_controller.readSingleArtist )
app.put('/editArtist/:artistName', artist_controller.editArtist)
app.post('/addBand', artist_controller.createArtist )
app.delete('/deleteArtist/:artistName', artist_controller.deleteArtist)

app.post('/addEmail', contact_controller.createEmail )
app.post('/sendEmail', contact_controller.sendEmail )




app.listen( process.env.SERVER_PORT, () => {console.log('listening on port 3005')})


