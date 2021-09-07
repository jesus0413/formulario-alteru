import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css';
import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { db } from '../../utils/firebase';
import { addDoc, collection } from "@firebase/firestore"


export const Register = () => {

    const [FormSend, setFormSend] = useState(false);
   
    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("");
    const [estadoCivil, setEstadoCivil] = useState("");
    const [ciudadresidencia, setCiudadResidencia] = useState("");
    const [tipodeDocumento, setTipoDeDocumento] = useState("");
    const [numerodeDocumento, setNumeroDeDocumento] = useState("");
    const [birthday, setBirthday] = useState("");
    const [birthPlace, setBirtPlace] = useState("");
    const [email, setEmail] = useState("");
    const [diploma, setDiploma] = useState("");
    const [optioncourse, setOptionCourse] = useState("");
    const [course, setCourse] = useState("");
    const [englishLevel, setEnglishLevel] = useState("");
    const [useEnglish, setUseEnglish] = useState(""); 
       
   async function handleSubmit(e) {
      e.preventDefault();
      console.log("Click Firebase");
      try {
        const docRef = await addDoc(collection(db, "users"), {
         nombre: '',
         direccion: '',
         estadoCivil: '',
         ciudadresidencia: '',
         tipodeDocumento:'',
         numerodeDocumento: '',
         birthday: '',
         birthPlace: '',
         email: '',
         diploma: '',
         optionCourse: '',
         course: '',
         englishLevel: '',
         useEnglish: '',
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  

   return(
      <>
      <Formik
         initialValues= {{
             nombre: '',
             direccion: '',
             estadoCivil: '',
             ciudadresidencia: '',
             tipodeDocumento:'',
             numerodeDocumento: '',
             birthday: '',
             birthPlace: '',
             email: '',
             diploma: '',
             optionCourse: '',
             course: '',
             englishLevel: '',
             useEnglish: '',
             
         }}
         validate={(valores)=>{
             const errors = {};

            //Validacion nombre
             if(!valores.nombre){
                 errors.nombre = 'Por favor ingresar su nombre'
                 //console.log('Por favor ingresar un nombre');
             }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                errors.nombre = 'El nombre solo puede contener letras y espacios'
             }

            //Validacion Direccion
             if(!valores.direccion){
                errors.direccion = 'Por favor ingresar su direccion'
                //console.log('Por favor ingresar la dierccion');
            }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.direccion)){
               errors.direccion = 'La direccion solo puede contener letras, numeros y espacios'
            }

            //Validacion del Estado civil
            if(!valores.estadoCivil){
              errors.estadoCivil = 'Por favor seleccione su estado civil'
              //console.log('Por favor ingresar estado civil');
            }else if(!/^[a-zA-ZÀ-ÿ\s]/.test(valores.estadoCivil)){
               errors.estadoCivil = 'Selecciona alguna de las opciones'
            }
             //Validacion Ciudad de residencia
             if(!valores.ciudadresidencia){
                errors.ciudadresidencia = 'Por favor digite la ciudad de nacimiento'
               // console.log('Por favdr digite la ciudad de nacimiento');
            }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.ciudadresidencia)){
               errors.ciudadresidencia = 'La ciudad de nacimiento solo puede contener letras y espacios'
            }

             //Validacion Tipo de documento
             if(!valores.tipodeDocumento){
                errors.tipodeDocumento = 'Por favor Selecciona alguna de las opciones'
               // console.log('Selecciona alguna de las opciones');
            }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.tipodeDocumento)){
               errors.tipodeDocumento = 'Selecciona alguna de las opciones'
            }

            //Validacion numero de Documento
             if(!valores.numerodeDocuemento){
                errors.numerodeDocuemento = 'Por favor ingresar su numero de identificación'
               // console.log('Por favor ingresar su numero de identificación');
            }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.numerodeDocuemento)){
               errors.numerodeDocuemento = 'El numero de identificación solo puede tener numeros y puntos'
            }

            //Validacion numero de fecha de nacimento
            if(!valores.birthday){
                errors.birthday = 'Por favor ingresar su fecha de nacimiento'
               // console.log('Por favor ingresar fecha de nacimiento');
            }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.birthday)){
               errors.birthday = 'Ingrese su fecha de nacimiento primero dia luego mes por ultimo año'
            }

            //Validacion lugar de nacimento
            if(!valores.birthPlace){
                errors.birthPlace = 'Por favor ingresar ciudad de nacimiento'
               // console.log('Por favor ingresar la ciudad de nacimiento');
            }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.birthPlace)){
               errors.birthPlace = 'El nombre de la ciudad solo puede contener letras y espacios'
            }

            //Validacion email
            if(!valores.email){
                errors.email = 'Por favor ingresar su correo electrónico'
               // console.log('Por favor ingresar un nombre');
            }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
               errors.email = 'Verifica el correo electrónico'
            }

            //Validacion ultimo diploma
            if(!valores.diploma){
                errors.diploma = 'Por favor ingresar el ultimo nombre del diploma obtenido'
               // console.log('Por favor ingresar un nombre');
            }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.diploma)){
               errors.diploma = 'El nombre del diploma solo puede contener letras y espacios'
            }

            //Validacion seleccion  de curso
            if(!valores.optionCourse){
                errors.optionCourse = 'Por favor seleccione alguna de las opciones'
               // console.log('Por favor escoge alguna opcion');
            }else if(!/^[a-zA-ZÀ-ÿ\s]/.test(valores.optionCourse)){
               errors.optionCourse = 'Escoge alguna de las opciones '
            }

            //Validacion nombre del curso
              if(!valores.course){
                errors.course = 'Por favor ingresar el nombre del curso'
               // console.log('Por favor ingresar el nombre del curso');
            }else if(!/^[a-zA-ZÀ-ÿ\s]/.test(valores.course)){
               errors.course = 'El nombre del curso solo se permite en letras y espacios'
            }

            //Validacion nivel de ingles
               if(!valores.englishLevel){
                errors.englishLevel = 'Por favor seleccione alguna de las opciones'
               // console.log('Por favor seleccione alguna de las opciones');
            }else if(!/^[a-zA-ZÀ-ÿ\s]/.test(valores.englishLevel)){
               errors.englishLevel = 'Escoge alguna de las opciones'
            }

            //Validacion nivel de ingles
            if(!valores.useEnglish){
                errors.useEnglish = 'Por favor seleccione alguna de las opciones'
               // console.log('Por favor seleccione alguna de las opciones');
            }else if(!/^[a-zA-ZÀ-ÿ\s]/.test(valores.useEnglish)){
               errors.useEnglish = 'Escoge alguna de las opciones'
            }



             return errors;
            
         }}
         onSubmit={(info, {resetForm}) => {
             resetForm();
             console.log(info);
             console.log('Formulario enviado');
             setFormSend(true);
             setTimeout(() => setFormSend(false), 5000);
         }}
      
      >
          {({ errors}) => (
           <Form className='formulario' onSubmit={handleSubmit} >
            {console.log(errors)}
           <Row className="mb-3">
              <div className="col-md-6">
                 <label htmlFor="nombre">Nombre Completo</label>
                 <Field
                    type="text"
                    name="nombre"
                    placeholder=""
                    id="nombre"
                    className="form-control"
                    onChange={(e) => setNombre(e.target.value)}
                    value={nombre}
                    
                 />
                <ErrorMessage name="nombre" component={() => ( <div className="error">{errors.nombre}</div>)} />
               
              </div>
      
              <div className="col-md-6">
                 <label htmlFor="direccion">Dirección</label>
                 <Field
                    type="text"
                    name="direccion"
                    placeholder=""
                    id="direccion"
                    className="form-control" 
                    onChange={(e) => setDireccion(e.target.value)}
                    value={ direccion}                  
                 />
                
               <ErrorMessage name="direccion" component={() => ( <div className="error">{errors.direccion}</div>)} />
              </div>
              </Row>
              <Row className="mb-3">
                <div className="col-md-6">
                   <label htmlFor="estadocivil">Estado Civil</label>
                   <Field name="estadoCivil" 
                          as="select"
                          className="form-select"
                          onChange={(e) => setEstadoCivil(e.target.value)}
                          value={estadoCivil}>
                     <option value="Selecciona">Selecciona...</option>
                     <option value="Soltero">Soltero</option>
                     <option value="Casado">Casado</option>
                   </Field>
                   <ErrorMessage name="estadoCivil" component={() => ( <div className="error">{errors.estadoCivil}</div>)} />
                </div>

                <div className="col-md-6">
                   <label htmlFor="ciudad de residencia">Ciudad de residencia</label>
                   <Field
                      type="text"
                      name="ciudadresidencia"
                      placeholder=""
                      id="ciudad"
                      className="form-control" 
                      onChange={(e) => setCiudadResidencia(e.target.value)}
                      value={ciudadresidencia}
                    />
                    <ErrorMessage name="ciudadresidencia" component={() => ( <div className="error">{errors.ciudadresidencia}</div>)} />
                </div>
             </Row>
            <Row className="mb-3">
                <div className="col-md-6">
                   <label htmlFor="documento">Tipo de documento</label>
                   <Field  name="tipodedocumento" as="select" 
                           className="form-select"
                           onChange={(e) => setTipoDeDocumento(e.target.value)}
                           value={tipodeDocumento}>
                     <option value="Selecciona">Selecciona...</option>
                     <option value="Cedula">Cedula de Ciudadania</option>
                     <option value="TarjetaIdentidad">Tarjeta de Identidad</option>
                     <option value="Pasaporte">Pasaporte</option>
                   </Field>
                   <ErrorMessage name="tipodeDocumento" component={() => ( <div className="error">{errors.tipodeDocumento}</div>)} />
                </div>
                <div className="col-md-6">
                   <label htmlFor="numerodeDocumento">Número de documento</label>
                   <Field 
                      type="number"
                      name="Numero de documento"
                      placeholder=""
                      id="numero de documento"
                      className="form-control" 
                      onChange={(e) => setNumeroDeDocumento(e.target.value)}
                      value={numerodeDocumento}
                   />
                   <ErrorMessage name="numerodeDocumento" component={() => ( <div className="error">{errors.numerodeDocumento}</div>)} />
                </div>
             </Row>
             <Row className="mb-3">
                <div className="col-md-6">
                   <label htmlFor="fecha">Fecha de nacimiento</label>
                   <Field
                      type="date"
                      name="birthday"
                      placeholder="DD/MM/AA"
                      id="fecha de nacimiento"
                      className="form-control"
                      onChange={(e) => setBirthday(e.target.value)}
                      value={birthday} 
                   />
                   <ErrorMessage name="birthday" component={() => ( <div className="error">{errors.birthday}</div>)} />
                </div>
                <div className="col-md-6">
                   <label htmlFor="ciudad de nacimiento">Ciudad de nacimiento</label>
                   <Field
                      type="text"
                      name="birthPlace"
                      placeholder=""
                      id="ciudad de nacimiento"
                      className="form-control" 
                      onChange={(e) => setBirtPlace(e.target.value)}
                      value={birthPlace}
                   />
                   <ErrorMessage name="birthPlace" component={() => ( <div className="error">{errors.birthPlace}</div>)} />
                </div>
           </Row>

           <div >
            <label htmlFor="email">Correo electrónico</label>
              <Field
                 type="email"
                 name="email"
                 placeholder=""
                 id="email" 
                 className="form-control" 
                 onChange={(e) => setEmail(e.target.value)}
                 value={email}        
              />
            <ErrorMessage name="email" component={() => ( <div className="error">{errors.email}</div>)} />
           </div>
           <div>
              <label htmlFor="diploma">Último diploma obtenido</label>
              <Field
                 type="text"
                 name="diploma"
                 placeholder=""
                 id="diploma"
                 className="form-control" 
                 onChange={(e) => setDiploma(e.target.value)}
                 value={diploma}               
              />
            <ErrorMessage name="diploma" component={() => ( <div className="error">{errors.diploma}</div>)} />
           </div>
           <Row className="mb-3">
                <div className="col-md-6">
                   <label htmlFor="nombre">¿Has tomado algún curso de programación?</label>
                   <Field name="optioncourse" 
                          as="select" 
                          className="form-select"
                          onChange={(e) => setOptionCourse(e.target.value)}
                          value={optioncourse}>
                     <option  value="Selecciona">Selecciona...</option>
                     <option  value="Si">Si</option>
                     <option  value="No">No</option>             
                   </Field>
                   <ErrorMessage name="optioncourse" component={() => ( <div className="error">{errors.optioncourse}</div>)} />
                </div>
                <div className="col-md-6">
                   <label htmlFor="course">Nombre del curso</label>
                   <Field
                      type="text"
                      name="course"
                      placeholder=""
                      id="course"
                      className="form-control"
                      onChange={(e) => setCourse(e.target.value)}
                      value={course}
                   />
                <ErrorMessage name="course" component={() => ( <div className="error">{errors.course}</div>)} />
                </div>
           </Row>

           <Row className="mb-3">
                <div className="col-md-6">
                   <label htmlFor="nombre">¿Cuál es tu nivel de inglés?</label>
                   <Field name="englishLevel" 
                          as="select" 
                          className="form-select"
                          onChange={(e) => setEnglishLevel(e.target.value)}
                          value={englishLevel}>
                     <option  value="Selecciona">Selecciona...</option>
                     <option  value="Principiente">Principiante</option>
                     <option  value="Intermedio">Intermedio</option>    
                     <option  value="Avanzado">Avanzado</option>           
                   </Field>
                   <ErrorMessage name="englishLevel" component={() => ( <div className="error">{errors.englishLevel}</div>)} />
                </div>
        
                <div className="col-md-6">
                   <label htmlFor="nombre">¿Has utilizado el inglés para tu trabajo?</label>
                   <Field name="useEnglish" 
                          as="select" 
                          className="form-select"
                          onChange={(e) => setUseEnglish(e.target.value)}
                          value={useEnglish} >
                     <option  value="Selecciona">Selecciona...</option>
                     <option  value="Si">Si</option>
                     <option  value="No">No</option>             
                   </Field>
                   <ErrorMessage name="useEnglish" component={() => ( <div className="error">{errors.useEnglish}</div>)} />
                </div>
          </Row>
          
     
            
           </Form>

          )}
     
      </Formik>
      </> 
    
   );
};