import { Module } from '@nestjs/common';
import { GroupclassService } from './groupclass.service';
import { GroupclassController } from './groupclass.controller';

@Module({
  controllers: [GroupclassController],
  providers: [GroupclassService]
})
export class GroupclassModule {}
