import React from 'react'
import { StyledInput } from './styles/Input.styled'

function Input ({...props}) {
  return (
    <StyledInput {...props}/>
  );
}

export default Input