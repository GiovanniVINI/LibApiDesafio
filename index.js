const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const { routes } = require('./config/routes');
const {routesAuthors} = require('./config/bridge');
const { routesBridge } = require('./config/routes-bridge');

const app = express();

app.use(express.json())
app.use(morgan('dev'));
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(routes)
app.use(routesAuthors)
app.use(routesBridge)

app.listen(21262, () => {
    console.log('Express started at http://localhost:21262')
})