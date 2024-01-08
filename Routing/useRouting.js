const express = require('express')
const route = express.Router()

const {sand} = require('../Controller/useController')

route.post('',sand)


module.exports=route