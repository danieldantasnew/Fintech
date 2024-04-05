import './App.css';
import Header from './Components/Header';
import Sidenav from './Components/Sidenav';
import Summary from './Components/Summary';

function App() {

  return (
    <section className='container'>
        <Sidenav/>
      <main>
        <Header/>
        <Summary/>
      </main>
    </section>
  )
}

export default App
