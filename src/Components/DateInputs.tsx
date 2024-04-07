import React from 'react'
import { useData } from '../Context/Context';
import Input from './Input';

const formStyle: React.CSSProperties = {
  display: "flex",
  flex: 1,
  backgroundColor: "var(--color-5)",
  borderRadius: "var(--gap)",
  padding: "var(--gap-s)"
}

const DateInputs = () => {
  const {inicio, final, setInicio, setFinal} =  useData();

  return (
  <form style={formStyle}>
    <Input label="Início" value= {inicio} onChange={({target})=> setInicio(target.value)}/>
    <Input label="Final" value= {final} onChange={({target})=> setFinal(target.value)} />
  </form>
  )
}

export default DateInputs