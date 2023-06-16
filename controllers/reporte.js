//Importar paquetes requeridos de node
const {response}= require('express')


//Importacion de los modelos 
const Reporte=require('../models/reporte')

//insercion, modificacion de datos

//consultar
const reporteGet = async(req, res = response)=>{
    const{nombre}= req.query // desestructuracion obtiene lo que se manda del navegador

   const reportes = await Reporte.find()
   res.json({
    reportes
   })
}


const reportePost = async (req, res ) => {
    try {
        // Capturar atributos o parámetros
        const body = req.body;
        // Instanciar el objeto
        const reporte = new Reporte(body);

        // Guardar objeto
        await reporte.save();

        res.json({
            msg: 'La inserción se efectuó exitosamente'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: error.message
        });

    
    }
};

const reportePut = async (req, res = response) => {
    let id = null;
    if (req.query != null && req.query.id != null) {
        id = req.query.id;
    } 
    const { direccion, latitud, longitud, descripcion} = req.body;
    let mensaje = "";
  
    try {
        if (id != null) {

            const update = { direccion: direccion , latitud: latitud, longitud: longitud, descripcion: descripcion};

           const reporte = await Reporte.findByIdAndUpdate(
                id,
                update,
                {new: true, runValidators: true}
              );

              if (reporte) {
                mensaje = "La modificación se efectuó correctamente";
              } else {
                mensaje = "El reporte no fue encontrado";
              }
        }
        else {
            mensaje = "Ingrese un id";
        }
   
    } catch (error) {
      console.error(error);
      mensaje = error.message;
    }
  
    res.json({
      msg: mensaje,
    });
  };
  
  const reporteDelete = async (req, res = response) => {

    const { id } = req.query;
    let mensaje = "";
      
    try {
      const reporte = await Reporte.deleteOne({_id:id})

      if (reporte) {
        mensaje = "La eliminación se efectuó correctamente";
      } else {
        mensaje = "El reporte no fue encontrado";
      }
    } catch (error) {
      console.error(error);
      mensaje = "Se presentó un error en la eliminación";
    }
  
    res.json({
      msg: mensaje,
    });
  };

  
  

module.exports={
    reporteGet,
    reportePost,
    reportePut,
    reporteDelete
}
