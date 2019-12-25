export interface Visita {
    codigoVisita: number;
    codigoRepresentante: number;
    codigoCliente: number;
    data: Date;
    valor: number;
    representante: Representante;
    cliente: Cliente;

}

export class Representante {

    codigoRepresentante: number;
    nome: string;

}

export class Cliente {

    codigoCliente: number;
    nome: string;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cep: string;
    cidade: string;
    estado: string;

}