import React from 'react';

const monthStyle: React.CSSProperties = {
  padding: "var(--gap)",
  backgroundColor: "var(--color-3)",
  color: "var(--color-2)",
  flex: 1,
  fontWeight: 600,
  textAlign: "center",
  borderRadius: "var(--gap)",
  border: "transparent"
}

const Month = () => {
  return (
    <button style={monthStyle}>Maio</button>
  )
}

export default Month