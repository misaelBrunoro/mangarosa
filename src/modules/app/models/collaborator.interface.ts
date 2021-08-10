export enum Knowledge {
  git = 'Git',
  php = 'PHP',
  nodejs = 'NodeJS',
  devops = 'DevOps',
  database = 'Database',
  typescript = 'TypeScript',
}

export enum Validation {
  validated = 'validated',
  notValidated = 'notValidated',
}

export const ValidationArray = [Validation.validated, Validation.notValidated];

export const KnowledgeArray = Object.keys(Knowledge).map(
  (key) => Knowledge[key],
);

export interface ICollaborator {
  id?: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  validation: Validation;
  knowledge: Knowledge[];
  validationDate?: Date;
  createdAt?: Date;
}
