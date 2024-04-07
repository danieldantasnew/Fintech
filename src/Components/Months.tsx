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
      <Month numberMonth={-3}/>
      <Month numberMonth={-2}/>
      <Month numberMonth={-1}/>
      <Month numberMonth={0}/>
    </div>
  )
}

export default Months