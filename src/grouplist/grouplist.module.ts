import { Module } from '@nestjs/common';
import { GrouplistService } from './grouplist.service';
import { GrouplistController } from './grouplist.controller';

@Module({
  controllers: [GrouplistController],
  providers: [GrouplistService]
})
export class GrouplistModule {}
