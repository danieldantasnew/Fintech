import './App.css';
import Header from './Components/Header';
import Sidenav from './Components/Sidenav';
import Summary from './Components/Summary';
import { ContextProvider } from './Context/Context';

function App() {

  return (
    <ContextProvider>
      <section className='container'>
        <Sidenav/>
        <main>
          <Header/>
          <Summary/>
        </main>
      </section>
    </ContextProvider>
  )
}

export default App
