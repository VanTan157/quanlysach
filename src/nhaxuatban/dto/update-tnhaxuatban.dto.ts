import { PartialType } from '@nestjs/mapped-types';
import { CreateTnhaxuatbanDto } from './create-tnhaxuatban.dto';

export class UpdateTnhaxuatbanDto extends PartialType(CreateTnhaxuatbanDto) {}
