import React from 'react';

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

const Month = ({numberMonth}: {numberMonth: number}) => {
  return (
    <button style={monthStyle}>{monthName(numberMonth)}</button>
  )
}

export default Month