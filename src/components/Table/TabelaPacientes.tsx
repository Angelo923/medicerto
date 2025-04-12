import React from 'react';
import './TabelaPacientes.css';
import {FaEye, FaTrashAlt, FaPen} from 'react-icons/fa'; // Ícones diretos
import { ITabelaPacientes } from "./interface";
import { useOutletContext } from "react-router-dom";
import { pacientes } from '../../data/pacientes';

const TabelaPacientes: React.FC<ITabelaPacientes> = () => {
    const { searchTerm } = useOutletContext<{ searchTerm: string }>();

    const handleActionClick = (id: string, action: string) => {
        console.log(`Ação ${action} para paciente ${id}`);
        // Adicione aqui a lógica específica para cada ação
    };

    const pacientesFiltrados = pacientes.filter(paciente => {
        const term = searchTerm.toLowerCase();
        return (
            paciente.nome.toLowerCase().includes(term) ||
            paciente.cpf.includes(term) ||
            paciente.status.toLowerCase().includes(term)
        );
    });

    return (
        <div className="tabela-container">
            <table className="tabela">
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Sexo</th>
                    <th>CPF</th>
                    <th>Nascimento</th>
                    <th>Idade</th>
                    <th>Última Visita</th>
                    <th>Status</th>
                    <th>Ações</th>
                </tr>
                </thead>
                <tbody>
                {pacientesFiltrados.map((paciente) => (
                    <tr key={paciente.id}>
                        <td>{paciente.nome}</td>
                        <td>{paciente.sex}</td>
                        <td>{paciente.cpf}</td>
                        <td>{paciente.nascimento}</td>
                        <td>{paciente.idade}</td>
                        <td>{paciente.ultimaVisita}</td>
                        <td>
                                <span className={`status-badge ${paciente.status.toLowerCase()}`}>
                                    {paciente.status}
                                </span>
                        </td>
                        <td>
                            <div className="acoes-diretas">
                                <button
                                    className="acao-btn editar"
                                    onClick={() => handleActionClick(paciente.id, 'editar')}
                                    aria-label="Editar paciente"
                                    title="Editar"
                                >
                                    <FaPen />
                                </button>
                                <button
                                    className="acao-btn excluir"
                                    onClick={() => handleActionClick(paciente.id, 'excluir')}
                                    aria-label="Excluir paciente"
                                    title="Excluir"

                                >
                                    <FaTrashAlt />

                                </button>
                                <button
                                    className="acao-btn visualizar"
                                    onClick={() => handleActionClick(paciente.id, 'visualizar')}
                                    aria-label="Visualizar paciente"
                                    title="Visualizar"
                                >
                                    <FaEye />
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TabelaPacientes;