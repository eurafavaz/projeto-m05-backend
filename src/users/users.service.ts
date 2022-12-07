// import { IUser } from './entities/user.entity';
import { randomUUID } from 'crypto';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './services/user.repository';

@Injectable()
export class UsersService {
  // private users: IUser[] = [];

  constructor(private userRepository: UserRepository) {}

  async create(user: CreateUserDto) {
    const userEntity = { ...user, id: randomUUID() };
    return await this.userRepository.createUser(userEntity);
  }

  async findAll() {
    return this.userRepository.findAllUser();
  }

  async findOne(userId: string) {
    const existUser = this.userRepository.findUserById(userId);
    if (!existUser) {
      throw new Error(`User not found`);
    }
    return this.userRepository.findUserById;
  }

  async update(userData: UpdateUserDto) {
    this.userRepository.updateUser.map((user) => {
      if (user.id == userData.id) {
        this.userRepository.updateUser(userData);
      }
    });
    const updatedUser = this.userRepository.updateUser(userData);
    return updatedUser;
  }

  async remove(userId: string) {
    const existUser = this.userRepository.deleteUser(userId);
    if (existUser) {
      this.userRepository.deleteUser((existUser) => {
        this.userRepository.deleteUser(userId);
      });
      return true;
    } else {
      return false;
    }
  }
}
