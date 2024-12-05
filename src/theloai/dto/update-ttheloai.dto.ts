import { PartialType } from '@nestjs/mapped-types';
import { CreateTtheloaiDto } from './create-ttheloai.dto';

export class UpdateTtheloaiDto extends PartialType(CreateTtheloaiDto) {}
