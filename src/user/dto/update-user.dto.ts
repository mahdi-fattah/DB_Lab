import { Length } from 'class-validator';
import { ApiProperty} from '@nestjs/swagger';

export default class UpdateUserDto {
    @ApiProperty({description:'Enter the the user ID > ', type: "number"})
    readonly id: number;

    @Length(3, 10)
    @ApiProperty({description:'Enter the name of the user > ', type: "string", minLength: 3, maxLength: 10})
    readonly name: string;

    @ApiProperty({description:"Enter user's books ID >", type: "array", items: {type: "number"}})
    readonly books: number[] ;

    @ApiProperty({description:"Enter user username", type: "string"})
    readonly username: string;

    @ApiProperty({description:"Enter user's password", type: "string"})
    readonly password: string;
  }