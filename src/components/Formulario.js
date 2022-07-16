
import React from 'react'
import { useState } from 'react'
import {StyledFormulario, BtnEnviar} from './styles/Formulario.styled'


export default function Formulario() {

     
      const [Form, setForm] = useState("")
          
      const handleChange = (e) => {
          setForm({
              ...Form,
              [e.target.name]: e.target.value
          })
          console.log(e.target.name)
          console.log(e.target.value)
      } 

      const handleChecked = (e) => {
          setForm({
              ...Form,
              [e.target.name]: e.target.checked
          })
          console.log(e.target.name)
          console.log(e.target.checked)
      } 

      const handleSubmit = (e) => {
          alert("The form has been sent")
      } 
          
   

          return (
        <> 
          <StyledFormulario>
            <form type="submit" onSubmit={handleSubmit} >
              <h1 >ASIGNACION DE CITAS</h1>
              <input type="text"id="name" name="name" placeholder='Nombre Completo' onChange={handleChange} required/><br/><br/>
              <input type="text"  id="dni" name="dni" placeholder='Documento de identidad'onChange={handleChange} required/><br/><br/>
              <input type="date" name="date" id="date" onChange={handleChange} required/><br/><br/>
              <div ><span className='pe-3 ps-1'>Sex:</span>
              <div><label htmlFor="hombre"  >Man</label> 
              <input type="radio" name="sex" id="man" value="man" onChange={handleChange} /></div>
              <div><label htmlFor="mujer">Woman</label>  
              <input type="radio" name="sex" value="woman" id="woman" onChange={handleChange}/></div></div>
              <input type="tel" id="tel" name="tel" placeholder='Numero de telefono' onChange={handleChange} required/> <br/><br/>
              <input type="email" id="email" name="email" placeholder='Email'onChange={handleChange} required /><br/><br/>
              <input type="text"  id="address" name="address" placeholder='Direccion' onChange={handleChange} required/><br/><br/>
              <span className='pe-2'>EPS:</span><select name="EPS" onChange={handleChange} required>
              <option name="Sanitas" value="english">Sanitas</option>
              <option name="Confamiliar" value="spanish">Confamiliar</option>
              <option name="NuevaEPS"  value="french">NuevaEPS</option>
              </select><br/><br/>
           
          
              <textarea name="textarea" cols="50" rows="10" placeholder='Motivo de Consulta' onChange={handleChange} required/><br/><br/>
              <BtnEnviar>Enviar</BtnEnviar>

            </form>
         </StyledFormulario> 
   </>

  )
}
       
