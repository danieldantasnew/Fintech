import React from "react";
import { useLocation } from "react-router-dom";
import DateInputs from "./DateInputs";
import Months from "./Months";

const headerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--gap)"
}

const divElementsStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "var(--gap)"
}

const titleStyle: React.CSSProperties = {
  flex: 1,
  backgroundColor: "var(--color-3)",
  color: "var(--color-2)",
  fontWeight: 600,
  fontSize: "2rem",
  borderRadius: "var(--gap)",
  padding: "var(--gap)"
}

const Header = () => {
  const [title, setTitle] = React.useState('');
  const params = useLocation().pathname;

  React.useEffect(()=> {
    switch (params) {
      case '/':
        setTitle('Resumo')
        break;
      case '/vendas':
        setTitle('Vendas')
        break;
      default:
        break;
    }
  }, [params]);

  return (
    <header style={headerStyle}>
      <div style={divElementsStyle} className="headerClass">
        <DateInputs/>
        <h2 style={titleStyle}>{title}</h2>
      </div>
      <Months/>
    </header>
  )
}

export default Header;