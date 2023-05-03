import { Cargo } from "./cargo";
import { Departamento } from "./departamento";
import { Perfil } from "./perfil";

export interface Usuario{

    id?: any;
    nome:string;
    sobrenome:string;
    apelido:string;
    email:string;
    cpf:string;
    registro:string;
    usuario:string;
    senha:string;
    data_aniversario:string;
    cargo?:Cargo;
    departamento?:Departamento;
    perfis: Perfil[] ,
    ativo:boolean;
}