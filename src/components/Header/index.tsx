import { FaBars, FaTimes } from 'react-icons/fa';
import {IHeader} from "./interface.ts";
import {FaUserDoctor} from "react-icons/fa6";

const Header = ({ openMenu, setOpenMenu }: IHeader) => {
    return (
        <header className="cabecalho">
            <button
                className="menu-hamburguer"
                onClick={() => setOpenMenu(!openMenu)}
                aria-label={openMenu ? "Fechar menu" : "Abrir menu"}
            >
                {openMenu ? <FaTimes /> : <FaBars />}
            </button>
            <h1>Sistema de Gestão <FaUserDoctor /></h1>
        </header>
    );
};

export default Header;