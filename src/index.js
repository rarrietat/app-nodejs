const express = require('express')
const app = express()
const path = require('path')

// setting
app.set('port', 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')


// middelewares


// routes
app.use(require('./routes/'))

// static files
app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.set('port'), () => {
    console.log('Server on port', app.set('port'))
})