const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json(),bodyParser.urlencoded())
const route = require('./Routing/useRouting')


app.use('',route)











app.listen(6198,()=>{
    console.log('**********')
})