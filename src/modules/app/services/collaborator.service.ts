import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ICollaborator } from '../models/collaborator.interface';
import { Collaborator } from '../models/collaborator.model';

@Injectable()
export class CollaboratorService {
  constructor(
    @InjectRepository(Collaborator)
    private collaboratorRepository: Repository<Collaborator>,
  ) {}

  public async index(): Promise<Collaborator[]> {
    return this.collaboratorRepository.find();
  }

  public async show(id: number): Promise<Collaborator> {
    const collaborator = await this.collaboratorRepository.findOne(id);
    if (!collaborator) throw new NotFoundException();
    return collaborator;
  }

  public async store(body: ICollaborator): Promise<Collaborator> {
    let collaborator: Collaborator;
    if (body.id) {
      collaborator = await this.collaboratorRepository.preload({
        ...body,
      });
    } else {
      collaborator = await this.collaboratorRepository.create(body);
    }

    await this.collaboratorRepository.save(collaborator);

    if (!collaborator) throw new NotFoundException();

    return collaborator;
  }

  public async destroy(id: number): Promise<void> {
    const collaborator = await this.collaboratorRepository.findOne(id);

    if (!collaborator) throw new NotFoundException();

    this.collaboratorRepository.delete(id);
  }
}
