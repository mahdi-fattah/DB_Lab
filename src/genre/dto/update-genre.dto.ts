import { Length , IsOptional, Min, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class UpdateGenreDto {

    @ApiProperty({description:"Enter genre Id for update.", type: "number"})
    readonly id: number;

    @ApiProperty({description:"Enter the genre name for update.", type: "string"})
    readonly type: string;
  }