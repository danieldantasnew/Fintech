import React from 'react';
import { useData } from '../Context/Context';

const monthStyle: React.CSSProperties = {
  padding: "var(--gap)",
  backgroundColor: "var(--color-3)",
  color: "var(--color-2)",
  flex: 1,
  fontWeight: 600,
  textAlign: "center",
  borderRadius: "var(--gap)",
  border: "transparent",
  textTransform: "capitalize"
}

function monthName(numberMonth: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + numberMonth);
  return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date);
}

function convertDateToString(date: Date) {
  const day = date.getDate().toString().padStart(2,'0');
  const month = (date.getMonth() + 1).toString().padStart(2,'0');
  
  return`${date.getFullYear()}-${month }-${day}`
}

const Month = ({numberMonth}: {numberMonth: number}) => {

  const {setInicio, setFinal} = useData();
  
  function setMonth(numberMonth: number) {
    const date = new Date();
    date.setMonth(date.getMonth() + numberMonth);
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    setInicio(convertDateToString(firstDay));
    setFinal(convertDateToString(lastDay));
  }

  return (
    <button onClick={()=> setMonth(numberMonth)} style={monthStyle}>{monthName(numberMonth)}</button>
  )
}

export default Month;