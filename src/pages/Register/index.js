import './register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
 
export const Register = () => {
 
   const [inputNombre, setInputNombre] = useState('');
   const [inputDireccion, setInputDireccion]= useState('');
   const [inputCiudadResidencia, setInputCiudadResidencia]= useState('');
   const [inputNumerodeDocumento, setInputNumerodeDocumento]= useState('');
   const [inputFecha, setInputFecha]= useState('');
   const [inputCiudaddeNacimiento, setInputCiudaddeNacimiento]= useState('');
   const [inputCorreo, setInputCorreo] = useState('');
   const [inputDiploma, setInputDiploma]= useState('');
   const [inputNombreCurso, setInputNombreCurso]= useState('');
 
 
  // Funcion que se encargara de validar los datos y enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
 
    // Comprobamos validacion del formulario ...
    // Si todo es correcto enviamos el formulario
 
    console.log('Formulario Enviado!');
  }
 
  // Funcion que se encarga de cambiar el estado del inputNombre
  const handleInputNombre = (e) => {
    setInputNombre(e.target.value);
  }
  
  // Funcion que se encarga de cambiar el estado del inputDireccion
  const handleInputDireccion = (e) => {
    setInputDireccion(e.target.value);
  }
 
  //Funcion que se encarga de cambiar el estado del inputCiudadResidencia
   const handleInputCiudadResidencia = (e) => {
      setInputCiudadResidencia(e.target.value);
   }
 
   //Funcion que se encarga de cambiar el estado del inputCiudadResidencia
   const handleInputNumerodeDocumento = (e) => {
      setInputNumerodeDocumento(e.target.value);
   }
 
   //Funcion que se encarga de cambiar el estado del inputCiudadResidencia
   const handleInputFecha = (e) => {
      setInputFecha(e.target.value);
   }
 
   //Funcion que se encarga de cambiar el estado del inputCiudadResidencia
   const handleInputCiudaddeNacimiento = (e) => {
      setInputCiudaddeNacimiento(e.target.value);
   }
 
   //Funcion que se encarga de cambiar el estado del inputCiudadResidencia
   const handleInputCorreo = (e) => {
      setInputCorreo(e.target.value);
   }
 
   //Funcion que se encarga de cambiar el estado del inputCiudadResidencia
   const handleInputDiploma = (e) => {
      setInputDiploma(e.target.value);
   }
 
   //Funcion que se encarga de cambiar el estado del inputCiudadResidencia
   const handleInputNombreCurso = (e) => {
      setInputNombreCurso(e.target.value);
   }
 
   return(
      <>
      <form action="" onSubmit={handleSubmit} className="formulario">
         <Row className="mb-3">
         <div className="col-md-6">
            <label htmlFor="nombre">Nombre Completo</label>
            <input
               type="text"
               name="nombre"
               placeholder=""
               id="nombre"
               className="form-control"
               value={inputNombre}
               onChange={handleInputNombre}
            />
         </div>
 
         <div className="col-md-6">
            <label htmlFor="direccion">Dirección</label>
            <input
               type="text"
               name="direccion"
               placeholder=""
               id="direccion"
               value={inputDireccion}
               onChange={handleInputDireccion}
            />
         </div>
         </Row>
         <Row className="mb-3">
         <div className="col-md-6">
            <label htmlFor="estadocivil">Estado Civil</label>
            <select id="disabledSelect" className="form-select">
              <option>Selecciona...</option>
              <option>Soltero</option>
              <option>Casado</option>
            </select>     
         </div>
 
         <div className="col-md-6">
            <label htmlFor="ciudad de residencia">Ciudad de residencia</label>
            <input
               type="text"
               name="ciudad"
               placeholder=""
               id="ciudad"
               value={inputCiudadResidencia}
               onChange={handleInputCiudadResidencia}
            />
         </div>
         </Row>
         <Row className="mb-3">
         <div className="col-md-6">
            <label htmlFor="documento">Tipo de documento</label>
            <select id="disabledSelect" className="form-select">
              <option>Selecciona...</option>
              <option>Cedula de Ciudadania</option>
              <option>Tarjeta de Identidad</option>
              <option>Pasaporte</option>
            </select>
         </div>
         <div className="col-md-6">
            <label htmlFor="numerodedocumento">Número de documento</label>
            <input
               type="number"
               name="Numero de documento"
               placeholder=""
               id="numero de documento"
               value={inputNumerodeDocumento}
               onChange={handleInputNumerodeDocumento}
            />
         </div>
         </Row>
         <Row className="mb-3">
         <div className="col-md-6">
            <label htmlFor="fecha">Fecha de nacimiento</label>
            <input
               type="number"
               name="fecha de nacimiento"
               placeholder="DD/MM/AA"
               id="fecha de nacimiento"
               value={inputFecha}
               onChange={handleInputFecha}
            />
         </div>
         <div className="col-md-6">
            <label htmlFor="ciudad de nacimiento">Ciudad de nacimiento</label>
            <input
               type="text"
               name="ciudad de nacimiento"
               placeholder=""
               id="ciudad de nacimiento"
               value={inputCiudaddeNacimiento}
               onChange={handleInputCiudaddeNacimiento}
            />
         </div>
         </Row>
         
         <div >
            <label htmlFor="email">Correo electrónico</label>
            <input
               type="email"
               name="email"
               placeholder=""
               id="email"
               value={inputCorreo}
               onChange={handleInputCorreo}
            />
         </div>
         <div>
            <label htmlFor="diploma">Último diploma obtenido</label>
            <input
               type="text"
               name="diploma"
               placeholder=""
               id="diploma"
               value={inputDiploma}
               onChange={handleInputDiploma}
            />
         </div>
         <Row className="mb-3">
         <div className="col-md-6">
            <label htmlFor="nombre">¿Has tomado algún curso de programación?</label>
            <select id="disabledSelect" className="form-select">
              <option>Selecciona...</option>
              <option>Si</option>
              <option>No</option>             
            </select>
         </div>
         <div className="col-md-6">
            <label htmlFor="curso">Nombre del curso</label>
            <input
               type="text"
               name="curso"
               placeholder=""
               id="curso"
               value={inputNombreCurso}
               onChange={handleInputNombreCurso}
            />
         </div>
         </Row>
         <Row className="mb-3">
         <div className="col-md-6">
            <label htmlFor="nombre">¿Cuál es tu nivel de inglés?</label>
            <select id="disabledSelect" className="form-select">
              <option>Selecciona...</option>
              <option>Principiante</option>
              <option>Intermedio</option>    
              <option>Avanzado</option>           
            </select>
         </div>
 
         <div className="col-md-6">
            <label htmlFor="nombre">¿Has utilizado el inglés para tu trabajo?</label>
            <select id="disabledSelect" className="form-select">
              <option>Selecciona...</option>
              <option>Si</option>
              <option>No</option>             
            </select>
         </div>
         </Row>
 
        
      </form>
   </> 
    
   );
};
