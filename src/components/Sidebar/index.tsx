import {Link} from "react-router-dom";
import { FcAutomatic, FcBullish, FcCalendar, FcConferenceCall } from 'react-icons/fc';

const Sidebar = () => {
    return (
        <aside className="barra-lateral">
            <nav>
                <ul>
                    <li className="dash-icon">
                        <Link to="/dashboard" ><FcBullish /> Dashboard</Link>
                    </li>
                    <li className="dash-icon">
                        <Link to="/pacientes" > <FcConferenceCall /> Pacientes</Link>
                    </li>
                    <li className="dash-icon">
                        <Link to="#" ><FcCalendar /> Agendamentos</Link>
                    </li>

                    <li className="dash-icon">
                        <Link to="/configuracoes" ><FcAutomatic /> Configurações</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;