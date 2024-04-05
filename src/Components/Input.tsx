import React from 'react';

type InputType = React.ComponentProps<'input'> & {
  label: string;
};

const divInputCss: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--gap-s)",
  padding: "var(--gap-s)",
  flex: 1,
}

const inputStyle: React.CSSProperties = {
  padding: "var(--gap-s) .75rem ",
  backgroundColor: "var(--color-4)",
  color: "var(--color-2)",
  borderRadius: "var(--gap)",
  fontSize: "1rem",
  fontWeight: "600"
}

const inputDateStyle: React.CSSProperties = {
  fontWeight: "300",
  border: "transparent",
  maxWidth: "156px",
  fontFamily: "monospace"
}


const Input = ({label, ...props}: InputType) => {
  return (
    <div style={divInputCss}>
      <label style={inputStyle} htmlFor={label}>{label}</label>
      <input style={{...inputStyle, ...inputDateStyle}} type="date" id={label} {...props}/>
    </div>
  )
}

export default Input;