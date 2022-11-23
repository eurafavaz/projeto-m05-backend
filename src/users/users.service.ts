// import { User } from './entities/user.entity';
// import { randomUUID } from 'crypto';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// export class UserService {
//   private users: User[] = [];

//   async createUser(user: CreateUserDto): Promise<User> {
//     const userEntity = { ...user, id: randomUUID() };
//     this.users.push(userEntity);
//     return userEntity;
//   }

//   async updateUser(userData: UpdateUserDto): Promise<User> {
//     this.users.find.map((user, index) => {
//       if (user.id == userData.id) {
//         const UpdatedUser = Object.assign(user, userData);
//         this.users.splice(index, 1, UpdatedUser);
//       }
//     });
//     const updatedUser = this.users.find((user) => user.id == userData.id);
//     return updatedUser;
//   }
// }

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
