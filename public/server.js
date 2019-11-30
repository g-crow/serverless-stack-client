const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = express.Router();
const port = process.env.PORT || 8080;
require('dotenv').config();
const mongoose = require('mongoose');
const playlists = require('./routes/playlists');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const appKey = process.env.SPOTIFY_CLIENT_ID;
const appSecret = process.env.SPOTIFY_CLIENT_SECRET;

app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new SpotifyStrategy({
  clientID: appKey,
  clientSecret: appSecret,
  callbackURL: 'http://localhost:8080/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      // To keep the example simple, the user's spotify profile is returned to
      // represent the logged-in user. In a typical application, you would want
      // to associate the spotify account with a user record in your database,
      // and return that user instead.
      return done(null, profile);
    });
  }));

mongoose.connect('mongodb://localhost/tuneup')


app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(methodOverride());

app.use(session({ secret: 'keyboard cat' }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/spotify',
  passport.authenticate('spotify', {scope: ['user-read-email', 'user-read-private'], showDialog: true}),
  function(req, res){
// The request will be redirected to spotify for authentication, so this
// function will not be called.
});


app.use('/v1',router)
router.use('/playlists', playlists)

app.get('/', function(req, res){
  res.render('index.html')
  // res.render('index.html', { user: req.user });;
})


app.get('/auth/spotify',
  passport.authenticate('spotify', {scope: ['user-read-email', 'user-read-private'], showDialog: true}),
  function(req, res){

});

app.get('/callback',
  passport.authenticate('spotify', { failureRedirect: '/login' }),
  function(req, res) {
    console.log('gettting called');
    res.redirect('/');

  });

app.listen(port)
console.log('tuneUp on port ' + port)
