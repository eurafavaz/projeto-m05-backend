import { Injectable } from '@nestjs/common';
import { CreateGroupclassDto } from './dto/create-groupclass.dto';
import { UpdateGroupclassDto } from './dto/update-groupclass.dto';

@Injectable()
export class GroupclassService {
  create(createGroupclassDto: CreateGroupclassDto) {
    return 'This action adds a new groupclass';
  }

  findAll() {
    return `This action returns all groupclass`;
  }

  findOne(id: number) {
    return `This action returns a #${id} groupclass`;
  }

  update(id: number, updateGroupclassDto: UpdateGroupclassDto) {
    return `This action updates a #${id} groupclass`;
  }

  remove(id: number) {
    return `This action removes a #${id} groupclass`;
  }
}
