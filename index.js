// import modules
const config = require('config');
const express = require('express');
const app = express();
const morgan = require('morgan');
const debug = require('debug')('app:startup');
const helmet = require('helmet');

// Configuration
debug(`Application name: ${config.get('name')}`);
debug(`Application Machine: ${config.get('machine.host')}`);
// use middlewares
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    debug("Morgan is enabled now...")
}
app.use(helmet());
