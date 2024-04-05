import React from 'react';

const pageStyle: React.CSSProperties = {
  flex: 1,
  backgroundColor: "var(--color-3)",
  color: "var(--color-2)",
  fontWeight: 600,
  fontSize: "2rem",
  borderRadius: "var(--gap)",
  padding: "var(--gap)"
}

const Page = ({title}: {title: string}) => {
  return (
    <div style={pageStyle}>{title}</div>
  )
}

export default Page;