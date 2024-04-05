import Input from "./Input";
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

const formStyle: React.CSSProperties = {
  display: "flex",
  flex: 1,
  backgroundColor: "var(--color-5)",
  borderRadius: "var(--gap)",
  padding: "var(--gap-s)"
}

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={divElementsStyle}>
        <form style={formStyle}>
          <Input label="Início" />
          <Input label="Final" />
        </form>
        <Page title="Resumo"/>
      </div>
      <Months/>
    </header>
  )
}

export default Header;