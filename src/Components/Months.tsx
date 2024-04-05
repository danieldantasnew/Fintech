import React from 'react';
import Month from './Month';

const monthsStyle: React.CSSProperties = {
  display: "flex",
  gap: "var(--gap)",
  flex: 1,
}

const Months = () => {
  return (
    <div style={monthsStyle}>
      <Month/>
      <Month/>
      <Month/>
      <Month/>
    </div>
  )
}

export default Months