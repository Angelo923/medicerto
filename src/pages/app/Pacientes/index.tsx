import React from 'react';
import TabelaPacientes from '@/components/Table/TabelaPacientes.tsx';
import { Helmet } from 'react-helmet-async';

const Pacientes: React.FC = () => {

    return (
      <>
      <Helmet title="Pacientes"/>
      <TabelaPacientes  />
      </>
    );
};

export default Pacientes;