import { PartialType } from '@nestjs/swagger';
import { CreateGroupclassDto } from './create-groupclass.dto';

export class UpdateGroupclassDto extends PartialType(CreateGroupclassDto) {}
