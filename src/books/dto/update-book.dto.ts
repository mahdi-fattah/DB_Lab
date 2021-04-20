import { ApiProperty } from '@nestjs/swagger';

export default class UpdateBookDto {
  @ApiProperty({description:"Enter book ID", type: "number"}) 
  readonly id: number;

  @ApiProperty({description:"Enter book name", type: "string"}) 
  readonly name: string;

  @ApiProperty({description:"Enter book's owner ID", type: "number"}) 
  readonly userID: number;

  @ApiProperty({description:"Enter book's genres ID", type: "array", items: {type: "number"}}) 
  readonly genreIDs: number[];
}