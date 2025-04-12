import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaPacientes from './pages/PaginaPacientes';
import TabelaPacientes from './components/Table/TabelaPacientes.tsx';
import Dashboard from "./pages/Dashboard";

const App: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <Router>
            <Routes>
                <Route path="/" element={<PaginaPacientes searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}>
                    <Route index element={<Dashboard />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route
                        path="pacientes"
                        element={<TabelaPacientes searchTerm={searchTerm} />}
                    />
                    <Route path="configuracoes" element={<div>Página de Configurações</div>} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;