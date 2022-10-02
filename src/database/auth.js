const Usuario = require('../models/usuario')
const existeEmail= await Usuario.findOne({email});
const usuario = await  Usuario.findById(uid);
  

