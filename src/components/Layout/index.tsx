import {ILayout} from "./interface.ts";
import {useState} from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import {BsPlusCircle} from "react-icons/bs";
import SearchBar from "../SearchBar";
import { Button } from '@/components/ui/button.tsx';

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
            <Header  />
            <Sidebar  />

            <main className="conteudo-principal" onClick={() => openMenu && closeMenu()}>
                {showSearchBar && (
                    <div className="controles-tabela">
                    <SearchBar
                        searchTerm={searchTerm || ''}
                        setSearchTerm={setSearchTerm || (() => {})}
                        placeholder="Buscar pacientes..."
                    />
                      <Button className="botao-adicionar">Adicionar Paciente <BsPlusCircle /></Button>
                    </div>
                )}
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;