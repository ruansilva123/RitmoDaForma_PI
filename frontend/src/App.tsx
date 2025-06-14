// Libs
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/site/Home/Home';
import Treinamentos from './pages/site/Treinamentos/Treinamentos';
import Aulas from './pages/site/Aulas/Aulas';

// Contexts
import { ModalProvider } from './contexts/ModalProvider';

// Style
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <ModalProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aulas" element={<Aulas/>}/>
            <Route path="/treinamentos" element={<Treinamentos/>}/>
          </Routes>
        </Router>
      </ModalProvider>
    </>
  );
}

export default App;
