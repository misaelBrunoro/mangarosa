import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayMinSize,
  IsArray,
  IsDate,
  IsEmail,
  IsEnum,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  MinLength,
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
  @MinLength(3)
  @MaxLength(50)
  @IsEmail()
  public email: string;

  @ApiProperty({ required: true, type: 'string', minLength: 14, maxLength: 14 })
  @IsString()
  @IsNotEmpty()
  @MinLength(14)
  @MaxLength(14)
  public cpf: string;

  @ApiProperty({ required: true, type: 'string', minLength: 9, maxLength: 11 })
  @IsString()
  @IsNotEmpty()
  @MinLength(9)
  @MaxLength(11)
  public phone: string;

  @IsOptional()
  @IsString()
  @IsIn(ValidationArray)
  @ApiProperty({
    required: false,
    enum: ValidationArray,
  })
  public validation?: Validation;

  @IsArray()
  @IsEnum(KnowledgeArray, { each: true })
  @ApiProperty({
    required: true,
    isArray: true,
    enum: KnowledgeArray,
  })
  @ArrayMinSize(3)
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
