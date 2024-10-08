import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Home from './pages/Home/Home';
import Treinamentos from './pages/Treinamentos/Treinamentos';
import Aulas from './pages/Aulas/Aulas';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/aulas" element={<Aulas/>}/>
          <Route path="/treinamentos" element={<Treinamentos />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
