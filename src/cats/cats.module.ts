import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService], // If we want to share CatsService with other modules. Now any module that imports the CatsModule has access to the CatsService.
})
export class CatsModule {}
