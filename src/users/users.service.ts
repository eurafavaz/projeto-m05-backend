import { IUser } from './entities/user.entity';
import { randomUUID } from 'crypto';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users: IUser[] = [];

  async create(user: CreateUserDto) {
    const userEntity = { ...user, id: randomUUID() };
    this.users.push(userEntity);
    return userEntity;
  }

  async findAll() {
    return this.users;
  }

  async findOne(userId: string) {
    const existUser = this.users.find((user) => user.id == userId);
    if (!existUser) {
      throw new Error(`User not found`);
    }
    return existUser;
  }

  async update(userData: UpdateUserDto) {
    this.users.map((user, index) => {
      if (user.id == userData.id) {
        const UpdatedUser = Object.assign(user, userData);
        this.users.splice(index, 1, UpdatedUser);
      }
    });
    const updatedUser = this.users.find((user) => user.id == userData.id);
    return updatedUser;
  }

  async remove(userId: string) {
    const existUser = this.users.find((user) => user.id == userId);
    if (existUser) {
      this.users.map((user, index) => {
        this.users.splice(index, 1);
      });
      return true;
    } else {
      return false;
    }
  }
}
