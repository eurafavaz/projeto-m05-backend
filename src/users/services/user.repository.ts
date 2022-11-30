import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(user: CreateUserDto) {
    const CreatedUser = await this.prisma.user.create({ data: user });
    return CreatedUser;
  }

  async updateUser(user: UpdateUserDto) {
    const UpdatedUser = await this.prisma.user.update({
      where: { id: user.id },
      data: user,
    });
    return UpdatedUser;
  }

  async deleteUser(id: string) {
    const DeletedUser = await this.prisma.user.delete({
      where: { id: id },
    });
    return DeletedUser;
  }

  async findAllUser() {
    const AllUsers = await this.prisma.user.findMany();
    return AllUsers;
  }

  async findUserById(id: string) {
    const FoundUser = await this.prisma.user.findUniqueOrThrow({
      where: { id: id },
    });
    return FoundUser;
  }
}
