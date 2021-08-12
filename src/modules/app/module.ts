import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Collaborator } from './models/collaborator.model';
import { CollaboratorController } from './controllers/collaborator.controller';
import { CollaboratorService } from './services/collaborator.service';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Collaborator])],
  controllers: [CollaboratorController],
  providers: [CollaboratorService],
})
export class AppModule {}
