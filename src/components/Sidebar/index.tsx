import {Link} from "react-router-dom";
import {ISidebar} from "./interface.ts";

const Sidebar = ({openMenu, closeMenu}: ISidebar) => {
    return (
        <aside className={`barra-lateral ${openMenu ? 'ativo' : ''}`}>
            <nav>
                <ul>
                    <li>
                        <Link to="/dashboard" onClick={closeMenu}>Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/pacientes" onClick={closeMenu}>Pacientes</Link>
                    </li>
                    <li>
                        <Link to="/configuracoes" onClick={closeMenu}>Configurações</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;