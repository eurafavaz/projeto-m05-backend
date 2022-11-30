import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GrouplistService } from './grouplist.service';
import { CreateGrouplistDto } from './dto/create-grouplist.dto';
import { UpdateGrouplistDto } from './dto/update-grouplist.dto';

@Controller('grouplist')
export class GrouplistController {
  constructor(private readonly grouplistService: GrouplistService) {}

  @Post()
  create(@Body() createGrouplistDto: CreateGrouplistDto) {
    return this.grouplistService.create(createGrouplistDto);
  }

  @Get()
  findAll() {
    return this.grouplistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.grouplistService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGrouplistDto: UpdateGrouplistDto) {
    return this.grouplistService.update(+id, updateGrouplistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.grouplistService.remove(+id);
  }
}
