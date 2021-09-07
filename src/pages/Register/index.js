import 'bootstrap/dist/css/bootstrap.min.css';

const form =()=>{
      
    return(
        <div className='container'>
            <form>
            <div className="form-row inline-forms">
        
              <div className='col mt-5 mb-5'>
               <div className='row' >
                 <h4 align='start'for='question16'>¿Cuál fue tu puntaje en las pruebas de estado del bachillerato?:</h4> 
               <input type='number' id='question16' className='form-control'></input>
               </div>
                </div> 

                <div className='row mt-5 mb-5'>
                  <div align='start'className='col'><h4 for='question17'>¿Cuántos años de experiencia laboral tienes?: </h4>
                  <input id='question17'type='number' className='form-control'></input> 
                  </div>
               <div className='col'>
               <h4 for='question17-1'align='start'>¿En qué área?: </h4> 
                <input id='question17-1'className='form-control' type='text'></input>
                </div>
                </div>
                
                <div className='row mt-5 mb-5'>
                  <div className='col'>
               <h4 align='start' for='question-18-1'> ¿Has realizado algún emprendimiento?:</h4> 
               <input className="form-control" list="datalistOptions" id="question-18-1" placeholder="selecciona..."></input>
                <datalist id="datalistOptions">
                 <option value="Si"> </option>
                  <option value="No"></option>
                </datalist>
                 </div>
                  <div className='col'>
               <h4 align='start' for='question-18-2'>¿Cual es tu emprendimiento?:</h4> 
               <input type='text' id='question-18-2'class="form-control"></input> 
                </div>
                </div>
               
                <div className='row mt-5 mb-5'>
                <div className='col'>
               <h4 align='start' for='question-19-1'> ¿Utilizas alguna plataforma de aprendizaje en línea?:</h4> 
               <input className="form-control" list="datalistOptions" id="question-19-1" placeholder="selecciona..."></input>
                <datalist id="datalistOptions">
                 <option value="Si"> </option>
                  <option value="No"></option>
                </datalist>
                 </div>
                 <div className='col'>
               <h4 align='start' for='question-19-2'>¿Cuál es la plataforma que más utilizas?:</h4> 
               <input type='text'id='question-19-2'className="form-control" ></input>
                </div>
              
                </div>
               
                <div className='question-22 mt-5 mb-5'>
                <div className='col'>
               <h4 align='start' for='question-22-1'> ¿Tienes computador y una buena conexión a Internet que te permita ver los videos de la formación?:</h4> 
               <input className="form-control" list="datalistOptions" id="question-22-1" placeholder="selecciona..."></input>
                <datalist id="datalistOptions">
                 <option value="Si"> </option>
                  <option value="No"></option>
                </datalist>
                 </div>
                 </div>  

            
                <div className='row mt-5 mb-5'>
                <div className='col'>
               <h4 align='start' for='question-23-1'> ¿Has participado en algún proyecto tecnológico?:</h4> 
               <input className="form-control" list="datalistOptions" id="question-23-1" placeholder="selecciona..."></input>
                <datalist id="datalistOptions">
                 <option value="Si"> </option>
                  <option value="No"></option>
                </datalist>
                 </div>
                 <div className='col'>
                 <h4 align='start' for='question-23-2'>¿Cuál?:</h4>
                 <input id='question-23-2'type='text' className='form-control'></input>
                 </div>
                </div>
                <div className='question-25 mt-5 mb-5'>
               <h4 for='question-25-1'align='start'>¿Cuáles son tus intereses o Hobbies?: </h4> 
               <input type='text' className='form-control' id='question-25-1'></input>
                </div>
                <div className='question-26 mt-5 mb-5'>
               <h4 align='start' for='question-26-1'>¿Por qué quieres hacer este programa?:</h4>  
               <input id='question-26-1'type='text' className='form-control'></input>
                </div>
                <div className='question-27 mt-5 mb-5'>
               <h4 align='start' for='question-27-1'>¿Cuáles son las situaciones de éxito que has vivido?:</h4>
               <input id='question-27-1'type='text' className='form-control'></input>
                </div>
                <div className='question-28 mt-5 mb-5'>
               <h4 align='start' for='question-28-1'>Del 100% de lo que sabes ¿Cómo ha sido tu proceso de formación?:</h4>  
                <input id='question-28-1'type='text' className='form-control'></input>
                </div>
                <div className='question-29 mt-5 mb-5'>
               <h4 align='start' for='question-29-1'>¿Qué esperas de tu vida profesional, qué esperas hacer?:</h4> 
               <input id='question-27-1'type='text' className='form-control'></input>
                </div>
               <div className='p-5'>
                <button type="submit" class="btn btn-primary btn-lg">Enviar</button>
            </div>
            </div>
            
            </form>
           
         
        </div>
    );


};
export default form;