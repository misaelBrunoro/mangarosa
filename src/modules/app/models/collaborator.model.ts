import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {
  ICollaborator,
  Knowledge,
  KnowledgeArray,
  Validation,
  ValidationArray,
} from './collaborator.interface';

@Entity()
export class Collaborator implements ICollaborator {
  @PrimaryGeneratedColumn()
  @ApiProperty({ type: 'integer' })
  id: number;

  @Column({
    nullable: false,
  })
  @ApiProperty({ type: 'string' })
  name: string;

  @Column({
    nullable: false,
  })
  @ApiProperty({ type: 'string' })
  email: string;

  @Column({
    nullable: false,
  })
  @ApiProperty({ type: 'string' })
  cpf: string;

  @Column({
    nullable: false,
  })
  @ApiProperty({ type: 'string' })
  phone: string;

  @Column({
    type: 'enum',
    enum: ValidationArray,
    default: `{${Validation.notValidated}}`,
  })
  @ApiProperty({ type: 'string' })
  validation: Validation;

  @Column({
    type: 'enum',
    enum: KnowledgeArray,
  })
  @ApiProperty({ type: 'string', isArray: true })
  knowledge: Knowledge[];

  @CreateDateColumn({
    type: 'timestamp',
  })
  @ApiProperty({ type: 'string', format: 'date-time' })
  validationDate: Date;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  @ApiProperty({ type: 'string', format: 'date-time' })
  public createdAt: Date;
}
