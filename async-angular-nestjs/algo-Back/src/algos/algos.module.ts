import { Module } from '@nestjs/common';
import { AlgosController } from './algos.controller';
import { AlgosService } from './algos.service';

@Module({
  controllers: [AlgosController],
  providers: [AlgosService]
})
export class AlgosModule {}
