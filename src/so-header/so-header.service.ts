import { Injectable } from '@nestjs/common';
import { CreateSoHeaderDto } from './dto/create-so-header.dto';
import { UpdateSoHeaderDto } from './dto/update-so-header.dto';

@Injectable()
export class SoHeaderService {
  create(createSoHeaderDto: CreateSoHeaderDto) {
    return 'This action adds a new soHeader';
  }
}
