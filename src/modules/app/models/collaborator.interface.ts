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

export const ValidationArray = Object.values(Validation);

export const KnowledgeArray = Object.values(Knowledge);

export interface ICollaborator {
  id?: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  validation?: Validation;
  knowledge: Knowledge[];
  validationDate?: Date;
  createdAt?: Date;
}
