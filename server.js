// Requirements
const express = require('express');
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles');
const methodOverride = require('method-override');
const Article = require('./models/article');
var md5 = require('md5');
const passport = require('passport');
const initializePassport = require('./passport-config');
initializePassport(passport);

// load env variables
const dotenv = require('dotenv');
const Users = require('./models/uCredentials');
dotenv.config();

// Create the Express app
const app = express();

// connect to mongodb
try {
    // Connect to the MongoDB cluster
    mongoose.connect(
        process.env.MONGO_URI,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log(" Mongoose is connected"),
    );
} catch (e) {
    console.log("could not connect");
}
const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

// routes
app.get('/', async (req, res) => {
    const articles = await Article.find().sort({ createdAt: 'desc' });
    res.render('articles/index', { articles: articles });
});
app.get('/login', (req, res) => {
    res.render('pages/login');
});
app.get('/register', (req, res) => {
    res.render('pages/register');
});
app.use('/articles', articleRouter);
app.use(express.static('public'));

app.post('/register', (req, res) => {
    // Validate username and password
    if (!req.body.username || !req.body.password) {
        res.render('pages/register', { err: 'Please enter a username and password' });
        return;
    }
    const encryptedPassword = md5(req.body.password);
    const user = new Users({username: req.body.username, password: encryptedPassword, admin: false});
    user.save((err) => {
        if (err) {
            console.log(err);
            res.render('pages/register', { err: 'Error! Cannot register user.' });
        } else {
            res.render('pages/login');
        }
    } );
});

app.post('/login', async (req, res) => {

});

// start server
app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate');
});