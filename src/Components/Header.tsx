import DateInputs from "./DateInputs";
import Months from "./Months";
import Page from "./Page";

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


const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={divElementsStyle}>
        <DateInputs/>
        <Page title="Resumo"/>
      </div>
      <Months/>
    </header>
  )
}

export default Header;