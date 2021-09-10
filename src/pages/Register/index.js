import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Row, Button, Form} from 'react-bootstrap';
//import { Alert } from 'react-bootstrap';
import './register.css';
import * as Yup from 'yup';
import { Field, Formik, } from 'formik';
import { addDoc, collection } from '@firebase/firestore';
import { db } from '../../utils/firebase'
 
 
export const Signup = () => {
 
   const [FormSend, setFormSend] = useState(false);
   const [show, setShow] = useState(false);


   const [fullname, setFullName] = useState("");
   const [address, setAddress] = useState("");
   const [status, setStatus]= useState('');
   const [residence, setResidence]= useState('');
   const [documentType, setDocumentType]= useState('');
   const [documentNumber, setDocumentNumber] = useState('');
   const [birthday, setBirthday]= useState('');   
   const [birthPlace, setBirthPlace] = useState("");
   const [email, setEmail] = useState("");
   const [diploma, setDiploma]= useState('');
   const [programmingOption, setProgrammingOption]= useState('');
   const [programmingName, setProgrammingName]= useState('');
   const [englishLevel, setEnglishLevel] = useState('');
   const [useEnglish, setUseEnglish]= useState('');
   const [score, setScore]= useState('');
   const [experienceYears, setExperienceYears]= useState('');
   const [experienceArea, setExperienceArea]= useState('');
   const [entrepreneurshipOption, setEntrepreneurshipOption] = useState("");
   const [entrepreneurshipName, setEntrepreneurshipName] = useState("");
   const [platformsOption, setPlatformsOption] = useState("");
   const [platformsName, setPlatformsName] = useState("");
   const [computer, setComputer]= useState('');
   const [projectsOption, setProjectsOption]= useState('');
   const [projectsName, setProjectsName]= useState('');
   const [hobbies, setHobbies]= useState('');
   const [reason, setReason] = useState('');
   const [success, setSuccess]= useState('');   
   const [education, setEducation] = useState("");
   const [dreamslife, setDreamslife] = useState("");
   
 
   
 
   async function handleSubmit(e) {
      e.preventDefault();
      console.log("Click Firebase");
      try {
        const docRef = await addDoc(collection(db, "users"), {
          fullname: fullname,
          address: address,
          status: status,
          residence:residence,
          document:{
             type: documentType,
             number:documentNumber,
          },
          birthday:{
             date: birthday,
             birthPlace: birthPlace,
          },
          email:email,
          diploma:diploma,
          programming:{
             option:programmingOption,
             name:programmingName,
          },
          english:{
             level:englishLevel,
             useEnglish:useEnglish,
          },
          score:score,
          experience:{
             years: experienceYears,
             area: experienceArea,
          },
          entrepreneurship:{
             option:entrepreneurshipOption,
             name:entrepreneurshipName,
          },
          platforms:{
             option:platformsOption,
             name:platformsName,
          },
          computer:computer,
          projects:{
             option:projectsOption,
             name:projectsName,
          },
          hobbies:hobbies,
          reason:reason,
          success:success,
          education:education,
          dreamslife:dreamslife,
          
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }    
      
       
   }
 
   const onSubmit=(info, {resetForm}) => {
      resetForm();
      console.log(info);
      console.log('Formulario enviado');
      setFormSend(true);
      setTimeout(() => setFormSend(false), 5000);
  }
 
 
   const initialValues = {
      fullname: '',
      address: '',
       status:'',
   residence:'',
   document:{
      type:'',
      number:0,
   },
   birthday:{
      date: "",
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
 
const validate = Yup.object({
   fullname: Yup.string()
     .max(15, 'Must be 15 characters or less')
     .required('Required'),
   address: Yup.string()
     .max(20, 'Must be 20 characters or less')
     .required('Required'),
   status: Yup.string()
     .max(20, 'Must be 20 characters or less')
     .required('Required'),
   residence: Yup.string()
     .max(20, 'Must be 20 characters or less')
     .required('Required'),
   documentType: Yup.string()
     .max(20, 'Must be 20 characters or less')
     .required('Required'),
   documentNumber: Yup.string()
     .max(20, 'Must be 20 characters or less')
     .required('Required'),
   birthday: Yup.string()
     .max(20, 'Must be 20 characters or less')
     .required('Required'),
   birthPlace: Yup.string()
     .max(20, 'Must be 20 characters or less')
     .required('Required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
   diploma: Yup.string()
     .max(20, 'Must be 20 characters or less')
     .required('Required'),
   programmingOption: Yup.string()
     .max(20, 'Must be 20 characters or less')
     .required('Required'),
   programmingName: Yup.string()
     .max(20, 'Must be 20 characters or less')
     .required('Required'),
   englishLevel: Yup.string()
     .max(20, 'Must be 20 characters or less')
     .required('Required'),
   useEnglish: Yup.string()
     .max(20, 'Must be 20 characters or less')
     .required('Required'),
   score: Yup.string()
     .max(20, 'Must be 20 characters or less')
     .required('Required'),
   experienceYears: Yup.string()
     .max(15, 'Must be 15 characters or less')
     .required('Required'),
   experienceArea: Yup.string()
     .max(20, 'Must be 20 characters or less')
     .required('Required'),
   entrepreneurshipOption: Yup.string()
     .max(20, 'Must be 20 characters or less')
     .required('Required'),
   entrepreneurshipName: Yup.string()
     .max(20, 'Must be 20 characters or less')
     .required('Required'),
   platformsOption: Yup.string()
     .max(20, 'Must be 20 characters or less')
     .required('Required'),
   platformsName: Yup.string()
     .max(20, 'Must be 20 characters or less')
     .required('Required'),
   computer: Yup.string()
     .max(20, 'Must be 20 characters or less')
     .required('Required'),
   projectsOption: Yup.string()
     .max(20, 'Must be 20 characters or less')
     .required('Required'),
   projectsName: Yup.string()
     .max(20, 'Must be 20 characters or less')
     .required('Required'),
   hobbies: Yup.string()
     .max(20, 'Must be 20 characters or less')
     .required('Required'),
   reason: Yup.string()
     .max(20, 'Must be 20 characters or less')
     .required('Required'),
   success: Yup.string()
     .max(20, 'Must be 20 characters or less')
     .required('Required'),
   education: Yup.string()
     .max(20, 'Must be 20 characters or less')
     .required('Required'),
    dreamslife: Yup.string()
     .max(20, 'Must be 20 characters or less')
     .required('Required'),
  }) 
 
   
  
   return(
      <>
      <Formik
        
       onSubmit = {onSubmit}
       initialValues={initialValues}
       validationSchema={validate}
      
      >
       {({errors, touched}) => (
           <Form className='form' onSubmit={handleSubmit} >
            
           <Row className="mb-3">
              <div className="col-md-6">
                 <label htmlFor="fullname">Nombre Completo</label>
                 <Field type="text"  name="fullname"  placeholder=""  id="fullname" className="form-control" onChange={(e) => setFullName(e.target.value)} value={fullname} />
                 {touched.fullname && errors.fullname && <div className="error">{errors.fullname}</div>}   
              </div>

              
      
              <div className="col-md-6">
                 <label htmlFor="address">Dirección</label>
                 <Field type="text" name="address"placeholder=""id="address"className="form-control"
                    onChange={(e) => setAddress(e.target.value)} value={address} />
                {touched.address && errors.address && <div className="error">{errors.address}</div>}
              </div>
             
              </Row>
              <Row className="mb-3">
              <div className="col-md-6">                               
                   <label className="label" htmlFor="estadocivil">Estado Civil</label>
                 
                   <Field name="status" 
                          as="select"
                          className="form-select"
                          value={status}  
                          onChange={(e) => setStatus(e.target.value)} required>
                            <option value="Selecciona">Selecciona...</option>
                            <option value="Soltero">Soltero</option>
                            <option value="Casado">Casado</option>
                   </Field>
                   
                   {touched.status && errors.status && <div className="error">{errors.status}</div>}
             </div>
                  

             <div className="col-md-6">                 
                   <label className="label" htmlFor="residence">Ciudad de residencia</label>
                   <Field
                      type="text"
                      name="residence"
                      placeholder=""
                      id="residence"
                      className="form-control" 
                      onChange={(e) => setResidence(e.target.value)}
                      value={residence}/>
                                 
                  {touched.residence && errors.residence && <div className="error">{errors.residence}</div>}
             </div>
             </Row>

             <Row className="mb-3">
              <div className="col-md-6">
                
                   <label className="label" htmlFor="documenttype">Tipo de documento</label>
                     <Field  name="documentType" as="select" 
                             className="form-select"
                             onChange={(e) => setDocumentType(e.target.value)}
                             value={documentType}   required>
                       <option value="Selecciona">Selecciona...</option>
                       <option value="Cedula">Cedula de Ciudadania</option>
                       <option value="Cedula">Cedula Extranjera</option>
                       <option value="TarjetaIdentidad">Tarjeta de Identidad</option>
                       <option value="Pasaporte">Pasaporte</option>
                     </Field>
                     {touched.documentType && errors.documentType && <div className="error">{errors.documentType}</div>}
                    
               </div>
               <div className="col-md-6">
                
                
                   <label className="label" htmlFor="documentNumber">Número de documento</label>
                   <Field
                      type="number"
                      name="documentNumber"
                      placeholder=""
                      id="document.number"
                      className="form-control" 
                      onChange={(e) => setDocumentNumber(e.target.value)}
                      value={documentNumber}   required
                   />
                  {touched.documentNumber && errors.documentNumber && <div className="error">{errors.documentNumber}</div>}
               </div>
             </Row>
             <Row className="mb-3">
              <div className="col-md-6">
                
                <label className="label" htmlFor="birthday">Fecha de nacimiento</label>
                   <Field
                      type="date"
                      name="birthday"
                      placeholder="DD/MM/AA"
                      id="birthday"
                      className="form-control"
                      onChange={(e) => setBirthday(e.target.value)}
                      value={birthday}   required
                   />


                    {touched.birthday && errors.birthday && <div className="error">{errors.birthday}</div>}
              </div> 
              <div className="col-md-6">
                 
                   <label className="label" htmlFor="birthday.birthdayPlace">Ciudad de nacimiento</label>
                   <Field
                      type="text"
                      name="birthday.birthPlace"
                      placeholder=""
                      id="birthday.birthdayPlace"
                      className="form-control" 
                      onChange={(e) => setBirthPlace(e.target.value)}
                      value={birthPlace}   required
                   />

                    {touched.birthdayPlace && errors.birthdayPlace && <div className="error">{errors.birthdayPlace}</div>}
            </div> 
           </Row>

           <Row>
                 <div>            
                     <label className="label" htmlFor="email">Correo electrónico</label>
                      <Field
                         type="email"
                         name="email"
                         placeholder=""
                         id="email" 
                         className="form-control" 
                         onChange={(e) => setEmail(e.target.value)}
                         value={email}   required       
                      />

                     {touched.email && errors.email && <div className="error">{errors.email}</div>}
                </div> 
            </Row>
             <Row>
                 <div>
                       <label  className="label" htmlFor="diploma">Último diploma obtenido</label>
                       <Field
                          type="text"
                          name="diploma"
                          placeholder=""
                          id="diploma"
                          className="form-control" 
                          onChange={(e) => setDiploma(e.target.value)}
                          value={diploma}   required               
                       />
                        {touched.diploma && errors.diploma && <div className="error">{errors.diploma}</div>}
            
                   
                 </div>
             </Row>
                        
           <Row className="mb-3">
                <div className="col-md-6">
                   <label className="label" htmlFor="programming">¿Has tomado algún curso de programación?</label>
                   <Field name="programming.option" 
                          as="select" 
                          className="form-select"
                          onChange={(e) => setProgrammingOption(e.target.value)}
                          value={programmingOption}   required>
                     <option  value="Selecciona">Selecciona...</option>
                     <option  value="Si">Si</option>
                     <option  value="No">No</option>             
                   </Field>  
                   {touched.programmingOption && errors.programmingOption && <div className="error">{errors.programmingOption}</div>}                 
                </div>

                <div className="col-md-6">
                
                   <label className="label" htmlFor="programming.name">Nombre del curso</label>
                   <Field
                      type="text"
                      name="programming.name"
                      placeholder=""
                      id="programming.name"
                      className="form-control"
                      onChange={(e) => setProgrammingName(e.target.value)}
                      value={programmingName}   required
                   />
                    {touched.programmingName && errors.programmingName && <div className="error">{errors.programmingName}</div>}
                
                </div>
           </Row>

           <Row className="mb-3">
                <div className="col-md-6">
                   <label className="label" htmlFor="english.level">¿Cuál es tu nivel de inglés?</label>
                   <Field name="english.Level" 
                          as="select" 
                          className="form-select"
                          onChange={(e) => setEnglishLevel(e.target.value)}
                          value={englishLevel}   required>
                     <option  value="Selecciona">Selecciona...</option>
                      <option value="A1">A1</option>
                      <option value="A2">A2</option>
                      <option value="B1">B1</option>
                      <option value="B2">B2</option>
                      <option value="C1">C1</option>
                      <option value="C2">C2</option>           
                   </Field>
                   {touched.englishLevel && errors.englishLevel && <div className="error">{errors.englishLevel}</div>}
                </div>        
                <div className="col-md-6">
                   <label  className="label" htmlFor="nombre">¿Has utilizado el inglés para tu trabajo?</label>
                   <Field name="english.useEnglish" 
                          as="select" 
                          className="form-select"
                          onChange={(e) => setUseEnglish(e.target.value)}
                          value={useEnglish}   required
                          >
                     <option  value="Selecciona">Selecciona...</option>
                     <option  value="Si">Si</option>
                     <option  value="No">No</option>             
                   </Field>
                   {touched.useEnglish && errors.useEnglish && <div className="error">{errors.useEnglish}</div>}
                </div>
          </Row>
          <Row className="mb-3">
               <div>                 
                    <label className="label" htmlFor="question16">¿Cuál fue tu puntaje en las pruebas de estado del bachillerato?:</label> 
                   <Field type='number'
                   name="score" 
                   id='question16'
                   className='form-control'
                   onChange={(e) => setScore(e.target.value)}
                   value={score}
                   ></Field>
             {touched.score && errors.score && <div className="error">{errors.score}</div>}
              
             </div>
         </Row>
         <Row className="mb-3">               
              <div className="col-md-6">
              
                  <label className="label" htmlFor="question17">¿Cuántos años de experiencia laboral tienes? </label>
                       <Field
                        name="experience.years"
                        id="question17" 
                        type="number"
                        className="form-control"
                        onChange={(e) => setExperienceYears(e.target.value)}
                        value={experienceYears}
                        /> 
                {touched.experienceYears && errors.experienceYears && <div className="error">{errors.experienceYears}</div>} 
               </div>
               <div className="col-md-6">
                   
                <label className="label" htmlFor="question17-1">¿En qué área? </label> 
                        <Field 
                        name="experience.area"
                        id="question17-1"
                        className="form-control" 
                        type="text"
                        onChange={(e) => setExperienceArea(e.target.value)}
                        value={experienceArea}/>
                {touched.experienceArea && errors.experienceArea && <div className="error">{errors.experienceArea}</div>} 
               </div>             
            </Row> 

            <Row className="mb-3">   
               <div className="col-md-6">
                  <label  className="label" htmlFor="question-18-1"> ¿Has realizado algún emprendimiento?</label> 
                       <Field 
                           as="select" 
                           className="form-select"
                           name="entrepreneurship.option"  
                           id="question-18-1" 
                           placeholder=""
                           onChange={(e) => setEntrepreneurshipOption(e.target.value)}
                           value={entrepreneurshipOption}>
                          <option  value="Selecciona">Selecciona...</option>
                          <option  value="Si">Si</option>
                          <option  value="No">No</option>                  
                       </Field>    

            {touched.entrepreneurshipOption && errors.entrepreneurshipOption && <div className="error">{errors.entrepreneurshipOption}</div>}                       
               </div>        
            
               <div className="col-md-6">
               
                        <label  className="label" htmlFor="question-18-2">¿Cual es tu  emprendimiento?</label> 
                       <Field type="text" id="question-18-2"
                        className="form-control"
                        name="entrepreneurship.name"
                        onChange={(e) => setEntrepreneurshipName(e.target.value)}
                        value={entrepreneurshipName}></Field> 
                
            {touched.entrepreneurshipName && errors.entrepreneurshipName && <div className="error">{errors.entrepreneurshipName}</div>} 
               </div>
            </Row>

            <Row className="mb-3">    
               <div className="col-md-6">
                  <label  className="label" htmlFor="question-19-1"> ¿Utilizas alguna plataforma de aprendizaje en línea?:</label> 
                 <Field className="form-select"  as="select" id="question-19-1"
                 name="platforms.option" 
                 placeholder=""
                 value={platformsOption}
                 onChange={(e) => setPlatformsOption(e.target.value)}>
                     <option  value="Selecciona">Selecciona...</option>
                     <option  value="Si">Si</option>
                     <option  value="No">No</option>
                 </Field> 
         {touched.platformsOption && errors.platformsOption && <div className="error">{errors.platformsOption}</div>}  
               </div>
             
               <div className="col-md-6">
               
                   <label className="label" htmlFor="question-19-2">¿Cuál es la plataforma que más utilizas?</label> 
                   <Field type="text"
                   id="question-19-2"
                   type="text"
                   className="form-control"
                   name="platforms.name"
                   value={platformsName}
                   onChange={(e) => setPlatformsName(e.target.value)}
                   ></Field>
                   
         {touched.platformsName && errors.platformsName && <div className="error">{errors.platformsName}</div>}
                
              </div>
            </Row>

            <Row>
               <div>
                  <label  className="label" htmlFor="question-22-1"> ¿Tienes computador y una buena conexión a Internet que te permita ver los videos de la formación?</label> 
                  <Field className="form-select"  id="question-22-1" placeholder="" 
                  as="select"
                  name="computer"
                  value={computer}
                  onChange={(e) => setComputer(e.target.value)}
                  >                  
                     <option  value="Selecciona">Selecciona...</option>
                     <option  value="Si">Si</option>
                     <option  value="No">No</option>
                  </Field>
           {touched.computer && errors.computer && <div className="error">{errors.computer}</div>}
               </div>  
          </Row>
          <Row className="mb-3">               
               <div className="col-md-6">
                    <label className="label"  htmlFor="question-23-1"> ¿Has participado en algún proyecto tecnológico?</label> 
                    <Field className="form-select"   as="select"
                    name="projects.option" 
                    id="question-23-1" 
                    placeholder=""
                    value={projectsOption}
                     onChange={(e) => setProjectsOption(e.target.value)}
                    >
                     <option  value="Selecciona">Selecciona...</option>
                     <option  value="Si">Si</option>
                     <option  value="No">No</option>
                    </Field>
                    {touched.projectsOption && errors.projectsOption && <div className="error">{errors.projectsOption}</div>}
                </div>  

                 <div className="col-md-6">
                
                     <label  className="label" htmlFor="question-23-2">¿Cuál?</label>
                     <Field id="question-23-2"
                           type="text" 
                           name="projects.name"
                           className="form-control"
                           value={projectsName}
                           onChange={(e) => setProjectsName(e.target.value)}>

                      </Field>
                     
                      {touched.projectsName && errors.projectsName && <div className="error">{errors.projectsName}</div>}
                 </div>            
            </Row>

            <Row className="mb-3">
            <div>
            
               <label className="label" htmlFor="question-25-1"align="start">¿Cuáles son tus intereses o Hobbies? </label> 
               <Field type="text" className="form-control" id="question-25-1"
               name="hobbies"  value={hobbies}
               onChange={(e) => setHobbies(e.target.value)}
               />
              
            </div>
            {touched.hobbies && errors.hobbies && <div className="error">{errors.hobbies}</div>}
            </Row>
            <Row className="mb-3">
             <div>
                        
               <label className="label"  htmlFor="question-26-1">¿Por qué quieres hacer este programa?</label>  
               <Field id="question-26-1"type="text" className="form-control"
               name="reason"  value={reason}
               onChange={(e) => setReason(e.target.value)}
                />
              
            </div>

            {touched.reason && errors.reason && <div className="error">{errors.reason}</div>}
            </Row>
            
            <Row className="mb-3">         

            <div>
            
               <label   className="label" htmlFor="question-27-1">¿Cuáles son las situaciones de éxito que has vivido?</label>
               <Field id='question-27-1'type='text' className='form-control'
               name="success" value={success}
               onChange={(e) => setSuccess(e.target.value)}
               ></Field>
             
            </div>

            {touched.success && errors.success && <div className="error">{errors.success}</div>}
            </Row>

            <Row className="mb-3">
            <div>
                
               <label  className="label" htmlFor="question-28-1">Del 100% de lo que sabes ¿Cómo ha sido tu proceso de formación?</label>  
                <Field id='question-28-1'type='text' className='form-control'name="education" value={education}
               onChange={(e) => setEducation(e.target.value)}
                ></Field>
              
            </div>
            {touched.education && errors.education && <div className="error">{errors.education}</div>}
            </Row>

            <Row className="mb-3">
            <div>
                
               <label className="label" htmlFor="question-29-1">¿Qué esperas de tu vida profesional, qué esperas hacer?</label> 
               <Field id='question-27-1' type='text' className="form-control" value={dreamslife}
               onChange={(e) => setDreamslife(e.target.value)}
               name="dreamslife"
              ></Field>

            </div>
            {touched.dreamslife && errors.dreamslife && <div className="error">{errors.dreamslife}</div>}
            </Row>


     
              <Button onClick={() => setFormSend(true)} type="submit" onReset>
                Enviar
             </Button> 
              
              
             {FormSend && <p className="exito">Formulario enviado con exito</p>}
                     
             
           </Form>
                
               
 
          )}
 
         
 
         
     
      </Formik>
      </> 
    
   );
};