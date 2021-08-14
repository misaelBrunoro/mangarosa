import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Collaborator } from '../models/collaborator.model';
import { CollaboratorService } from '../services/collaborator.service';
import { CollaboratorValidator } from '../validators/collaborator.validator';

@ApiTags('Collaborator')
@Controller('collaborators')
export class CollaboratorController {
  constructor(private collaboratorService: CollaboratorService) {}

  @Get(':id')
  @ApiOkResponse({ type: Collaborator })
  @ApiOperation({ summary: 'show a collaborator by id' })
  public show(@Param('id', ParseIntPipe) id: number): Promise<Collaborator> {
    return this.collaboratorService.show(id);
  }

  @Get()
  @ApiOkResponse({ type: [Collaborator] })
  @ApiOperation({ summary: 'show all collaborators' })
  public async index(): Promise<Collaborator[]> {
    return this.collaboratorService.index();
  }

  @Post()
  @ApiOkResponse({ type: Collaborator })
  @ApiOperation({ summary: 'save end edit a collaborator' })
  public async store(
    @Body(
      new ValidationPipe({
        errorHttpStatusCode: 422,
      }),
    )
    body: CollaboratorValidator,
  ): Promise<Collaborator> {
    return this.collaboratorService.store(body);
  }

  @Delete(':id')
  @ApiNoContentResponse()
  @ApiOperation({ summary: 'delete a collaborator by id' })
  public async destroy(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.collaboratorService.destroy(id);
  }

  @Patch(':id')
  @ApiNoContentResponse()
  @ApiOperation({ summary: 'edit validation and validationDate by id' })
  public async patchValidation(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<void> {
    return this.collaboratorService.patchValidation(id);
  }
}
