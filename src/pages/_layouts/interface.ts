export interface ILayout {
    showSearchBar?: boolean; // Se algumas páginas precisarem de busca
    searchTerm?: string;
    setSearchTerm?: (term: string) => void;
}