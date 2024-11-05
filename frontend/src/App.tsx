// Libs
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/site/Home/Home';
import Login from './pages/admin/Login/Login';
import Treinamentos from './pages/site/Treinamentos/Treinamentos';
import Aulas from './pages/site/Aulas/Aulas';
import AdminPortal from './pages/admin/AdminPortal/AdminPortal';
import EditTreinamentos from './pages/admin/EditTreinamentos/EditTreinamentos';

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
            <Route path="/admin" element={<AdminPortal/>}/>
            <Route path="/admin/editar_tutoriais" element={<EditTreinamentos/>}/>
            <Route path="/admin/login" element={<Login/>}/>
          </Routes>
        </Router>
      </ModalProvider>
    </>
  );
}

export default App;
