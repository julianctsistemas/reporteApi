//Migracion 
const {Schema, model}=require('mongoose')


const ReporteSchema = Schema({
    direccion: {
        type: String,
        required: [true, 'La dirección es requerida']
    },
    latitud: {
        type: Number,
        required: [true, 'La latitud es requerida'],
        min: [6.14, '  La latitud debe ser mayor o igual a 6.14'],
        max: [6.200, ' La latitud debe ser menor o   igual a 6.200']
        
    },
    longitud: {
        type: String,
        required: [true, 'La longitud es requerida'],
        min: [ -75.50, 'La longitud debe ser mayor o igual a -75.43'],
        max: [-75.43, 'La longitud debe ser menor o igual a -75.50']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción es requerida']
    },
    fechaReporte: {
        type: Date,
        required: [true, 'La fecha es requerida'],
        default: Date.now
    }
});

//este es el nombre del objeto Ambiente
module.exports = model('Reporte', ReporteSchema)//Exportar el modelo

