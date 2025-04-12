import {FaSearch} from "react-icons/fa";
import {ISearchBar} from "./interface.ts";

const SearchBar = ({ searchTerm, setSearchTerm, placeholder }: ISearchBar) => (
    <div className="campo-busca">
        <FaSearch className="icone-busca" />
        <input
            type="text"
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-busca"
        />
    </div>
);

export default SearchBar;