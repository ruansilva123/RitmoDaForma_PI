import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Home from './pages/site/Home/Home';
import Treinamentos from './pages/site/Treinamentos/Treinamentos';
import Aulas from './pages/site/Aulas/Aulas';
import AdminPortal from './pages/admin/AdminPortal/AdminPortal';
import EditTreinamentos from './pages/admin/EditTreinamentos/EditTreinamentos';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aulas" element={<Aulas/>}/>
          <Route path="/treinamentos" element={<Treinamentos/>}/>
          <Route path="/admin" element={<AdminPortal/>}/>
          <Route path="/admin/editar_tutoriais" element={<EditTreinamentos/>}/>
          <Route path="/admin/login" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
