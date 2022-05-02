// ? Libs
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

// ? Constants
const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';

// ? Database connection test
const db = require('./config/database')
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))

// ? App
const app = express();
app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}));
app.set('view engine','handlebars');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

// ? Routes
app.get('/', (req, res) => res.render('index', {layout: 'landing'}));
app.use('/insert', require('./routes/insert'));

// ? Port and IP
app.listen(PORT, HOST);
console.log(`Running on port http://${HOST}:${PORT}`);