const Mensaje = require("../models/mensaje");

const obtenerChat =async(miId, mensajesDe) =>{

    const last = await Mensaje.find({
        $or:[
            {de:miId, para: mensajesDe},
            {de:mensajesDe, para: miId}
        ]
    }).sort({ createdAt:'desc'}).limit(30);
   
}

module.exports = {
    obtenerChat
}