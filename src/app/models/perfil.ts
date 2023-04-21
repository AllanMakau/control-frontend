import { Tag } from "./tag";

export interface Perfil {
    id?:         any;
    nome:        string;
    descricao:   string;
    tag_list:    Tag[]
    ativo:       boolean;
}