import {ILayout} from "./interface.ts";
import {useState} from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import {BsPlusCircle} from "react-icons/bs";
import SearchBar from "../SearchBar";

const Layout = ({
    children,
    showSearchBar = false,
    searchTerm,
    setSearchTerm
}: ILayout) => {
    const [openMenu, setOpenMenu] = useState(false);
    const closeMenu = () => setOpenMenu(false);

    return (
        <div className="pagina-container">
            <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
            <Sidebar openMenu={openMenu} closeMenu={closeMenu} />

            <main className="conteudo-principal" onClick={() => openMenu && closeMenu()}>
                {showSearchBar && (
                    <div className="controles-tabela">
                    <SearchBar
                        searchTerm={searchTerm || ''}
                        setSearchTerm={setSearchTerm || (() => {})}
                        placeholder="Buscar pacientes..."
                    />
                        <button className="botao-adicionar">Adicionar Paciente <BsPlusCircle /></button>
                    </div>
                )}
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;