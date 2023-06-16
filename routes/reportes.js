

const {Router} = require('express')


const route = Router()
//se define despues de crear el controllador
//importar metodos del controlador
const{reporteGet, reportePost, reportePut, reporteDelete}=require('../controllers/reporte')
route.get('/', reporteGet)

route.post('/',reportePost )

route.put('/',reportePut )

route.delete('/',reporteDelete )

module.exports = route


