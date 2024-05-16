// import './App.css';
import Portfolio from './Pages/Portfolio/Portfolio';
import Services from './Pages/Services/Services';
import StartPage from './Pages/StartPage/StartPage';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/StartPage/Navbar';
import Footer from './components/StartPage/Footer';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Routes>
          <Route path='/' element={<StartPage />}> </Route>
          <Route path='/portfolio' element={<Portfolio />}> </Route>
          <Route path='/services' element={<Services />}> </Route>
          <Route path='/contact' element={<Contact />}> </Route>
        </Routes>
        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
