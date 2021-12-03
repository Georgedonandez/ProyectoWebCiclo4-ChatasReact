const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

require('./database')


app.use(morgan('dev'))
app.use(express.json()); 
//application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origen: '*' }))

app.use('/users', require('./routes/User.route'))
/*app.use('/contactos', require('./routes/Contacto.route'))*/
app.use('/news', require('./routes/New.route'))
app.use('/products', require('./routes/Product.route'))
/*app.use('/shopping', require('./routes/Purchase.route'))
 */

//Puerto

app.set('port', process.env.PORT || 4000); 
app.listen(app.get('port'), function () { 
    console.log('Listening on port '+ app.get('port')); 
});