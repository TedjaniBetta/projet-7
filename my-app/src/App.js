import './styles/App.scss'
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx'
import Header from './components/Header'
import Footer from './components/Footer/Footer.jsx';
import Error from './components/Errors/index.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Logement from './pages/Logement/Logement.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/logement/:id' element={<Logement/>} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
