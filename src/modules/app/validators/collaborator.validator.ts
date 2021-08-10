import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import {
  Knowledge,
  KnowledgeArray,
  Validation,
  ValidationArray,
} from '../models/collaborator.interface';

export class CollaboratorValidator {
  @ApiProperty({
    required: false,
    type: 'integer',
  })
  @IsOptional()
  @IsInt()
  @Min(0)
  public id?: number;

  @ApiProperty({ required: true, type: 'string', minLength: 3, maxLength: 50 })
  @IsString()
  @IsNotEmpty()
  public name: string;

  @ApiProperty({ required: true, type: 'string', minLength: 3, maxLength: 50 })
  @IsString()
  @IsNotEmpty()
  public email: string;

  @ApiProperty({ required: true, type: 'string', minLength: 3, maxLength: 50 })
  @IsString()
  @IsNotEmpty()
  public cpf: string;

  @ApiProperty({ required: true, type: 'string', minLength: 3, maxLength: 50 })
  @IsString()
  @IsNotEmpty()
  public phone: string;

  @IsString()
  @IsIn(ValidationArray)
  @ApiProperty({
    required: true,
    enum: ValidationArray,
  })
  public validation: Validation;

  @IsString()
  @IsIn(KnowledgeArray)
  @ApiProperty({
    required: true,
    isArray: true,
    enum: KnowledgeArray,
  })
  public knowledge: Knowledge[];

  @IsOptional()
  @IsDate()
  @ApiProperty({ required: false, type: 'string', format: 'date-time' })
  public validationDate?: Date;

  @IsOptional()
  @IsDate()
  @ApiProperty({ required: false, type: 'string', format: 'date-time' })
  public createdAt?: Date;
}
