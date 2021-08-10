import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Collaborator } from './models/collaborator.model';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Collaborator])],
  controllers: [],
  providers: [],
})
export class AppModule {}
