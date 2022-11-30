import { PartialType } from '@nestjs/swagger';
import { CreateGrouplistDto } from './create-grouplist.dto';

export class UpdateGrouplistDto extends PartialType(CreateGrouplistDto) {}
