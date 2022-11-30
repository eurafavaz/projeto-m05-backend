import { Module } from '@nestjs/common';
// import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { DataBaseModule } from 'prisma/database.module';

@Module({
  imports: [DataBaseModule],
  // imports: [UsersModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
