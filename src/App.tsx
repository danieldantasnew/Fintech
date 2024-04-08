import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Sidenav from './Components/Sidenav';
import Summary from './Pages/Summary';
import { ContextProvider } from './Context/Context';
import Sales from './Pages/Sales';
import Sale from './Pages/Sale';

function App() {

  return (
    <BrowserRouter>
      <ContextProvider>
        <section className='container'>
          <Sidenav/>
          <main>
            <Header/>
            <Routes>
              <Route path='/' element={<Summary/>}/>
              <Route path='/vendas' element={<Sales/>}/>
              <Route path='/vendas/:id' element={<Sale/>}/>
            </Routes>
          </main>
        </section>
      </ContextProvider>
    </BrowserRouter>
  )
}

export default App
