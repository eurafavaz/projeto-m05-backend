import { Injectable } from '@nestjs/common';
import { CreateGrouplistDto } from './dto/create-grouplist.dto';
import { UpdateGrouplistDto } from './dto/update-grouplist.dto';

@Injectable()
export class GrouplistService {
  create(createGrouplistDto: CreateGrouplistDto) {
    return 'This action adds a new grouplist';
  }

  findAll() {
    return `This action returns all grouplist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} grouplist`;
  }

  update(id: number, updateGrouplistDto: UpdateGrouplistDto) {
    return `This action updates a #${id} grouplist`;
  }

  remove(id: number) {
    return `This action removes a #${id} grouplist`;
  }
}
