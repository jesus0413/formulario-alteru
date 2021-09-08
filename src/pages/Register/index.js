//import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { db } from '../../utils/firebase.js';
import { addDoc, collection } from '@firebase/firestore';


export const Register = () => {

    const [FormSend, setFormSend] = useState(false);
   
    const formik = useFormik ({
       initialValues: {
         fullName:'',
         address:'',  
         status:'',
         residence:'',
         document:{
            type:'',
            number:0,
         },
         birthday:{
            date: "00-00-000",
            birthPlace:'',
         },
         email:'',
         diploma:'',
         programming:{
            option:"",
            name:"",
         },
         english:{
            level:"",
            useEnglish:"",
         },
         score:"",
         experience:{
            years: "",
            area:"",
         },
         entrepreneurship:{
            option:"",
            name:"",
         },
         platforms:{
            option:"",
            name:"",
         },
         computer:"",
         projects:{
            option:"",
            name:"",
         },
         hobbies:"",
         reason:"",
         success:"",
         education:"",
         dreamslife:"",
       }
    });
       
   async function handleSubmit(e) {
      console.log(formik.values);
      e.preventDefault();
      console.log("Click Firebase");
      try {
        const docRef = await addDoc(collection(db, "users"), {
               fullName:formik.values.fullName,
               address:formik.values.address,
               status:formik.values.status,
               residence:formik.values.residence,
               document:{
                  typo:formik.values.document.type,
                  number:formik.values.document.number,
               },
               birthday:{
                  date: formik.values.birthday.date,
                  birthPlace:formik.values.birthday.birthPlace,
               },
               email:formik.values.email,
               diploma:formik.values.diploma,
               programming:{
                  option:formik.values.programming.option,
                  name:formik.values.programming.name,
               },
               english:{
                  level:formik.values.english.level,
                  useEnglish:formik.values.english.useEnglish,
               },
               score:formik.values.score,
               experience:{
                  years:formik.values.experience.years,
                  area:formik.values.experience.area,
               },
               entrepreneurship:{
                  option:formik.values.entrepreneurship.option,
                  name:formik.values.entrepreneurship.name,
               },
               platforms:{
                  option:formik.values.platforms.option,
                  name:formik.values.platforms.name,
               },
             
               computer:formik.values.computer,
               projects:{
                  option:formik.values.projectsprojects.option,
                  name:formik.values.projectsprojects.name,
               },
               hobbies:formik.values.hobbies,
               reason:formik.values.reason,
               success:formik.values.success,
               education:formik.values.education,
               dreamslife:formik.values.dreamslife, 
        });
        console.log("Document written with ID:", docRef.id);
      } catch (e) {
        console.error("Error adding document:", e);
      }
    }
  

   return( <div className='formulario'>
      <Form  onSubmit={ handleSubmit } >
            
           <Row >
              <Col className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="fullName">Nombre Completo</Form.Label>
                  <Form.Control
                     type="text"
                     name="fullName"
                     placeholder=""
                     id="fullname"
                     className="form-control"
                     onChange={formik.handleChange}
                     value={ formik.values.fullName} required
                   />
                </Form.Group>
               </Col>           
               <Col className="col-md-6">
                  <Form.Group className="mb-3">
                        <Form.Label htmlFor="address">Dirección</Form.Label>
                     <Form.Control
                        type="text"
                        name="address"
                        placeholder=""
                        id="address"
                        className="form-control" 
                        onChange={formik.handleChange}
                        value={formik.values.address}
                        required                            
                        /> 
                  </Form.Group>
                </Col>      
              </Row>
              <Row>
              <Col className="col-md-6">
                <Form.Group className="mb-3">               
                   <Form.Label htmlFor="estadocivil">Estado Civil</Form.Label>
                   <Form.Control name="status" 
                          as="select"
                          className="form-select"
                          onChange={formik.handleChange}
                          value={formik.values.status} required>
                            <option value="Selecciona">Selecciona...</option>
                            <option value="Soltero">Soltero</option>
                            <option value="Casado">Casado</option>
                   </Form.Control>
                  </Form.Group>
             </Col>
                  

             <Col className="col-md-6">
                <Form.Group className="mb-3"> 
                   <Form.Label htmlFor="residence">Ciudad de residencia</Form.Label>
                   <Form.Control
                      type="text"
                      name="residence"
                      placeholder=""
                      id="residence"
                      className="form-control" 
                      onChange={formik.handleChange}
                      value={formik.values.residence}/>            
                  </Form.Group>
             </Col>
             </Row>
             <Row>
              <Col className="col-md-6">
                <Form.Group className="mb-3">
                   <Form.Label htmlFor="document.type">Tipo de documento</Form.Label>
                     <Form.Control  name="document.type" as="select" 
                             className="form-select"
                             onChange={formik.handleChange}
                             value={formik.values.document.type}   required>
                       <option value="Selecciona">Selecciona...</option>
                       <option value="Cedula">Cedula de Ciudadania</option>
                       <option value="Cedula">Cedula Extranjera</option>
                       <option value="TarjetaIdentidad">Tarjeta de Identidad</option>
                       <option value="Pasaporte">Pasaporte</option>
                     </Form.Control>
                    </Form.Group>
               </Col>
               <Col className="col-md-6">
                <Form.Group className="mb-3">
                
                   <Form.Label htmlFor="document.number">Número de documento</Form.Label>
                   <Form.Control
                      type="number"
                      name="document.number"
                      placeholder=""
                      id="document.number"
                      className="form-control" 
                      onChange={formik.handleChange}
                      value={formik.values.document.number}
                   />
                  </Form.Group>
               </Col>
             </Row>

            <Row>
              <Col className="col-md-6">
                <Form.Group className="mb-3"> 
                <Form.Label htmlFor="birthday">Fecha de nacimiento</Form.Label>
                   <Form.Control
                      type="date"
                      name="birthday"
                      placeholder="DD/MM/AA"
                      id="birthday"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.birthday.date}
                   />
                   </Form.Group>
               </Col> 
               <Col className="col-md-6">
                <Form.Group className="mb-3">  
                   <Form.Label htmlFor="birthday.birthdayPlace">Ciudad de nacimiento</Form.Label>
                   <Form.Control
                      type="text"
                      name="birthday.birthPlace"
                      placeholder=""
                      id="birthday.birthdayPlace"
                      className="form-control" 
                      onChange={formik.handleChange}
                      value={formik.values.birthday.birthPlace}
                   />
                  </Form.Group> 
               </Col> 
           </Row>

           <Row>
                 <Col>
                    <Form.Group className="mb-3">
                     <Form.Label htmlFor="email">Correo electrónico</Form.Label>
                      <Form.Control
                         type="email"
                         name="email"
                         placeholder=""
                         id="email" 
                         className="form-control" 
                         onChange={formik.handleChange}
                         value={formik.values.email}       
                      />
                     </Form.Group>
                 </Col>
             </Row>
             <Row>
                 <Col>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="diploma">Último diploma obtenido</Form.Label>
                       <Form.Control
                          type="text"
                          name="diploma"
                          placeholder=""
                          id="diploma"
                          className="form-control" 
                          onChange={formik.handleChange}
                          value={formik.values.diploma}               
                       />
                      </Form.Group>
                 </Col>
             </Row>
                        
           <Row className="mb-3">
                <Col className="col-md-6">
                   <Form.Label htmlFor="programming">¿Has tomado algún curso de programación?</Form.Label>
                   <Form.Select name="programming.option" 
                          as="select" 
                          className="form-select"
                          onChange={formik.handleChange}
                          value={formik.values.programming.option} >
                     <option  value="Selecciona">Selecciona...</option>
                     <option  value="Si">Si</option>
                     <option  value="No">No</option>             
                   </Form.Select>                   
                </Col>

                <Col className="col-md-6">
                <Form.Group className="mb-3">
                   <Form.Label htmlFor="programming.name">Nombre del curso</Form.Label>
                   <Form.Control
                      type="text"
                      name="programming.name"
                      placeholder=""
                      id="programming.name"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.programming.name} 
                   />
                  </Form.Group> 
                </Col>
           </Row>

           <Row className="mb-3">
                <Col className="col-md-6">
                   <Form.Label htmlFor="english.level">¿Cuál es tu nivel de inglés?</Form.Label>
                   <Form.Select name="english.Level" 
                          as="select" 
                          className="form-select"
                          onChange={formik.handleChange}
                          value={formik.values.english.level}>
                     <option  value="Selecciona">Selecciona...</option>
                      <option value="A1">A1</option>
                      <option value="A2">A2</option>
                      <option value="B1">B1</option>
                      <option value="B2">B2</option>
                      <option value="C1">C1</option>
                      <option value="C2">C2</option>           
                   </Form.Select>
                  
                </Col>        
                <Col className="col-md-6">
                   <Form.Label htmlFor="nombre">¿Has utilizado el inglés para tu trabajo?</Form.Label>
                   <Form.Select name="english.useEnglish" 
                          as="select" 
                          className="form-select"
                          onChange={formik.handleChange}
                          value={formik.values.english.useEnglish}
                          >
                     <option  value="Selecciona">Selecciona...</option>
                     <option  value="Si">Si</option>
                     <option  value="No">No</option>             
                   </Form.Select>
                  
                </Col>
          </Row>
         
          <Row>
               <Col>
                 <Form.Group className="mb-3">
                 <Form.Label htmlFor="question16">¿Cuál fue tu puntaje en las pruebas de estado del bachillerato?:</Form.Label> 
                <Form.Control type='number'
                name="score" 
                id='question16'
                className='form-control'
                onChange={formik.handleChange}
                value={formik.values.score}
                ></Form.Control>
               </Form.Group>
             </Col>
         </Row>   
              
            <Row >               
              <Col className="col-md-6">
              <Form.Group className="mb-3">
                  <Form.Label htmlFor="question17">¿Cuántos años de experiencia laboral tienes? </Form.Label>
                  <Form.Control
                   name="experience.years"
                   id="question17" 
                   type="number"
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.experience.years}
                    /> 
                 </Form.Group>
               </Col>
               <Col className="col-md-6">
                  <Form.Group className="mb-3">  
                <Form.Label htmlFor="question17-1">¿En qué área? </Form.Label> 
                <Form.Control 
                name="experience.area"
                id="question17-1"
                className="form-control" 
                type="text"e
                onChange={formik.handleChange}
                value={formik.values.experience.area}/>
                  </Form.Group>
               </Col>             
            </Row> 
            <Row className="mb-3">   
               <Col className="col-md-6">
                  <Form.Label  htmlFor="question-18-1"> ¿Has realizado algún emprendimiento?</Form.Label> 
                <Form.Select 
                as="select" 
                className="form-select"
                name="entrepreneurship.option"  
                id="question-18-1" 
                placeholder=""
                onChange={formik.handleChange}
                value={formik.values.entrepreneurship.option}>
                   <option  value="Selecciona">Selecciona...</option>
                   <option  value="Si">Si</option>
                   <option  value="No">No</option>                  
                </Form.Select>                                
               </Col>        
            
               <Col className="col-md-6">
               <Form.Group className="mb-3">
                   <Form.Label  htmlFor="question-18-2">¿Cual es tu  emprendimiento?</Form.Label> 
                  <Form.Control type="text" id="question-18-2"
                   class="form-control"
                   name="entrepreneurship.name"
                   onChange={formik.handleChange}
                   value={formik.values.entrepreneurship.name}></Form.Control> 
                  </Form.Group>
               </Col>
            </Row>  
            <Row className="mb-3">    
               <Col className="col-md-6">
                  <Form.Label  htmlFor="question-19-1"> ¿Utilizas alguna plataforma de aprendizaje en línea?:</Form.Label> 
                 <Form.Select className="form-select"  as="select" id="question-19-1"
                 name="platforms.option" 
                 placeholder=""
                 onChange={formik.handleChange}
                 value={formik.values.platforms.option}>
                     <option  value="Selecciona">Selecciona...</option>
                     <option  value="Si">Si</option>
                     <option  value="No">No</option>
                 </Form.Select> 
               </Col>
             
               <Col className="col-md-6">
               <Form.Group className="mb-3">
                   <Form.Label  htmlFor="question-19-2">¿Cuál es la plataforma que más utilizas?:</Form.Label> 
                   <Form.Control type="text"
                   id="question-19-2"
                   className="form-control"
                   name="platforms.name"
                   onChange={formik.handleChange}
                   value={formik.values.platforms.name}
                   
                   ></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
               <Col>
                  <Form.Label  htmlFor="question-22-1"> ¿Tienes computador y una buena conexión a Internet que te permita ver los videos de la formación?</Form.Label> 
                  <Form.Select className="form-select"  id="question-22-1" placeholder="" 
                  as="select"
                  name="computer"
                  onChange={formik.handleChange}
                  value={formik.values.computer}
                  >                  
                     <option  value="Selecciona">Selecciona...</option>
                     <option  value="Si">Si</option>
                     <option  value="No">No</option>
                  </Form.Select>
               </Col>  
          </Row>

            <Row className="mb-3">               
               <Col className="col-md-6">
                    <Form.Label  htmlFor="question-23-1"> ¿Has participado en algún proyecto tecnológico?</Form.Label> 
                    <Form.Select className="form-select"   as="select"
                    name="projects.option" 
                    id="question-23-1" 
                    placeholder=""
                    onChange={formik.handleChange}
                    value={formik.values.projects.option}>
                     <option  value="Selecciona">Selecciona...</option>
                     <option  value="Si">Si</option>
                     <option  value="No">No</option>
                    </Form.Select>
                </Col>  

                 <Col className="col-md-6">
                 <Form.Group className="mb-3">
                     <Form.Label  htmlFor="question-23-2">¿Cuál?</Form.Label>
                     <Form.Control id="question-23-2"
                      type="text" 
                      name="projects.name"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.projects.name}>

                      </Form.Control>
                      </Form.Group>
                     
                 </Col>            
            </Row>

            <Row>
            <Col>
            <Form.Group className="mb-3">
               <Form.Label htmlFor="question-25-1"align="start">¿Cuáles son tus intereses o Hobbies? </Form.Label> 
               <Form.Control type="text" className="form-control" id="question-25-1"
               name="hobbies"
               onChange={formik.handleChange}
               value={formik.values.hobbies}/>
               </Form.Group>
            </Col>
            </Row>
            <Row>
             <Col>
               <Form.Group className="mb-3">            
               <Form.Label  htmlFor="question-26-1">¿Por qué quieres hacer este programa?</Form.Label>  
               <Form.Control id="question-26-1"type="text" className="form-control"
               name="reason"
               onChange={formik.handleChange}
               value={formik.values.reason}></Form.Control>
              </Form.Group>
            </Col>
            </Row>
            <Row>         

            <Col>
            <Form.Group className="mb-3">
               <Form.Label  htmlFor="question-27-1">¿Cuáles son las situaciones de éxito que has vivido?</Form.Label>
               <Form.Control id='question-27-1'type='text' className='form-control'
               name="success"
               onChange={formik.handleChange}
               value={formik.values.success}></Form.Control>
               </Form.Group>
            </Col>
            </Row>

            <Row>
            <Col>
                 <Form.Group className="mb-3">
               <Form.Label  htmlFor="question-28-1">Del 100% de lo que sabes ¿Cómo ha sido tu proceso de formación?</Form.Label>  
                <Form.Control id='question-28-1'type='text' className='form-control'name="education"
                onChange={formik.handleChange}
                value={formik.values.education}></Form.Control>
               </Form.Group>
            </Col>
            </Row>

            <Row>
            <Col>
                <Form.Group className="mb-3">
               <Form.Label htmlFor="question-29-1">¿Qué esperas de tu vida profesional, qué esperas hacer?</Form.Label> 
               <Form.Control id='question-27-1' type='text' className="form-control"
               name="dreamslife"
               onChange={formik.handleChange}
               value={formik.values.dreamslife}></Form.Control>
             </Form.Group>
            </Col>
            </Row>
            <Button onClick={() => setFormSend(true)} type="submit" onReset>
                Enviar
             </Button>
            
           </Form>
            <Alert show={FormSend} variant="success">
            <Alert.Heading>Usuario Registrado con Exito</Alert.Heading>            
               <div className="d-flex justify-content-end">
                  <Button onClick={() => setFormSend(false)} variant="outline-success" type="reset">
                     Cerrar
                  </Button>
               </div>
            </Alert>        
       </div>

          );
      
    
   
};