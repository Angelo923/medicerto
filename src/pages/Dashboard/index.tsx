import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { pacientes } from '../../data/pacientes';

const Dashboard = () => {
    // Calculando o Total de Pacientes
    const totalPacientes = pacientes.length;

    // Calculando os Novos Pacientes deste Mês
    const novosEsteMes = pacientes.filter(paciente => {
        const dataUltimaVisita = new Date(paciente.ultimaVisita);
        const mesAtual = new Date().getMonth();
        return dataUltimaVisita.getMonth() === mesAtual; // Verifica se a última visita foi no mês atual
    }).length;

    // Consultas Agendadas - Você precisará de uma lógica adicional ou campo para consultas agendadas.
    // Simulando com a quantidade total de pacientes para fins de exemplo.
    const consultasAgendadas = totalPacientes; // Isso é apenas um placeholder

    // Média de Idade
    const mediaIdade = pacientes.reduce((acc, paciente) => acc + paciente.idade, 0) / totalPacientes;

    // Dados para o gráfico
    const statusData = [
        { name: 'Ativos', value: pacientes.filter(p => p.status === 'Ativo').length, color: '#2390DE' },
        { name: 'Inativos', value: pacientes.filter(p => p.status === 'Inativo').length, color: '#C62828' }
    ];

    // Dados para os cards
    const stats = [
        { label: 'Total de Pacientes', value: totalPacientes, icon: '👥' },
        { label: 'Novos este mês', value: novosEsteMes, icon: '🆕' },
        { label: 'Consultas agendadas', value: consultasAgendadas, icon: '📅' },
        { label: 'Média de idade', value: mediaIdade.toFixed(1), icon: '📊' }
    ];

    return (
        <div className="dashboard-page">
            <div className="dashboard-header">
                <h1 className="dashboard-main-title">Dashboard de Pacientes</h1>
            </div>

            {/* Cards de Estatísticas */}
            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card">
                        <div className="stat-icon">{stat.icon}</div>
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-label">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Gráfico de Pizza */}
            <div className="chart-container">
                <h2 className="chart-title">Status</h2>
                <div className="pie-chart-wrapper">
                    <ResponsiveContainer width="100%" height={400}>
                        <PieChart>
                            <Pie
                                data={statusData}
                                cx="50%"
                                cy="50%"
                                innerRadius={80}
                                outerRadius={120}
                                paddingAngle={2}
                                dataKey="value"
                                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                labelLine={false}
                            >
                                {statusData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={entry.color}
                                        stroke="#fff"
                                        strokeWidth={2}
                                    />
                                ))}
                            </Pie>
                            <Tooltip
                                formatter={(value) => [`${value} pacientes`, 'Quantidade']}
                                contentStyle={{
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                    border: 'none'
                                }}
                            />
                            <Legend
                                layout="horizontal"
                                verticalAlign="bottom"
                                align="center"
                                iconSize={12}
                                wrapperStyle={{ paddingTop: '20px' }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
