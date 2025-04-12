import React from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import {IPaginaPacientes} from "./interface.ts";
import Layout from "../../components/Layout";

const PaginaPacientes: React.FC<IPaginaPacientes> = ({ searchTerm, setSearchTerm }) => {
    const location = useLocation();
    const isPacientesRoute = location.pathname.includes('pacientes');

    return (
        <Layout
        showSearchBar={isPacientesRoute}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        >
            <Outlet context={{ searchTerm }} />
        </Layout>
    );
};

export default PaginaPacientes;