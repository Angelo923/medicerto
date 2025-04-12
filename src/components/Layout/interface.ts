export interface ILayout {
    children: React.ReactNode;
    showSearchBar?: boolean; // Se algumas páginas precisarem de busca
    searchTerm?: string;
    setSearchTerm?: (term: string) => void;
}