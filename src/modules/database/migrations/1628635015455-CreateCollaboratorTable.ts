import {
  KnowledgeArray,
  Validation,
  ValidationArray,
} from 'src/modules/app/models/collaborator.interface';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCollaboratorTable1628635015455
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'collaborator',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar(100)',
          },
          {
            name: 'email',
            type: 'varchar(100)',
          },
          {
            name: 'cpf',
            type: 'varchar(14)',
          },
          {
            name: 'phone',
            type: 'varchar(11)',
          },
          {
            name: 'validation',
            type: 'enum',
            enum: ValidationArray,
            enumName: 'validation_col_enum',
            default: `'${Validation.notValidated}'`,
          },
          {
            name: 'knowledge',
            type: 'enum',
            enum: KnowledgeArray,
            enumName: 'knowledge_col_enum',
          },
          {
            name: 'validationDate',
            type: 'timestamp',
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('collaborator');
  }
}
