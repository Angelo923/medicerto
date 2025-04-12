export interface IPacientes {
    id: string;
    nome: string;
    sex: string;
    cpf: string;
    nascimento: string;
    idade: number;
    ultimaVisita: string;
    status: 'Ativo' | 'Inativo';
}

export interface ITabelaPacientes {
    searchTerm: string;
}