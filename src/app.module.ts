import { Module } from '@nestjs/common';
// import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { DataBaseModule } from 'prisma/database.module';
import { GroupclassModule } from './groupclass/groupclass.module';
import { GrouplistModule } from './grouplist/grouplist.module';

@Module({
  imports: [DataBaseModule, GroupclassModule, GrouplistModule],
  // imports: [UsersModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
