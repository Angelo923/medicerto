import { faker } from '@faker-js/faker/locale/pt_BR';
import { IPacientes } from "../components/Table/interface";

export const pacientes: IPacientes[] = Array.from({ length: 30 }, () => {
    const sex = faker.person.sexType();
    const dataNascimento = faker.date.birthdate({
        min: 18,
        max: 90,
        mode: 'age'
    });

    function gerarCPF(): string {
        const rand = (n: number) => Math.floor(Math.random() * n);
        const n = Array(9).fill(0).map(() => rand(9));

        let d1 = n.reduce((acc, val, idx) => acc + (val * (10 - idx)), 0) % 11;
        d1 = d1 < 2 ? 0 : 11 - d1;

        let d2 = (n.reduce((acc, val, idx) => acc + (val * (11 - idx)), 0) + (d1 * 2)) % 11;
        d2 = d2 < 2 ? 0 : 11 - d2;

        return `${n.join('')}${d1}${d2}`.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }

    return {
        id: faker.string.uuid(),
        nome: faker.person.fullName({ sex }).toUpperCase(),
        sex: sex === 'male' ? 'Masculino' : 'Feminino',
        cpf: gerarCPF(),
        nascimento: dataNascimento.toLocaleDateString('pt-BR'),
        idade: new Date().getFullYear() - dataNascimento.getFullYear(),
        ultimaVisita: faker.date.recent({ days: 365 }).toLocaleDateString('pt-BR'),
        status: faker.helpers.arrayElement(['Ativo', 'Inativo']) as 'Ativo' | 'Inativo'
    };
});