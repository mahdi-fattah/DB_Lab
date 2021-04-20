import { Body, Controller, Get, ParseIntPipe, Post, Put, Delete,Query } from '@nestjs/common';
import { UserServices } from './user.service';
import CreateUserDto from './dto/create-user.dto';
import {ApiQuery } from '@nestjs/swagger';
import UpdateUserDto from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly usersServices: UserServices) {}

//'postUser()' will handle the creating of new User
  @Post('post')
  postUser( @Body() user: CreateUserDto) {
    return this.usersServices.insert(user);
  }
// 'getAll()' returns the list of all the existing users in the database
  @Get()
  getAll() {
    return this.usersServices.getAllUsers();
  }

//'getBooks()' return all the books which are associated with the user 
// provided through 'userID' by the request  
  @Get('books')
  getBooks( @Body('userID', ParseIntPipe) userID: number ) {
    return this.usersServices.getBooksOfUser(userID);
  }

  @ApiQuery({name: 'userID', required: true, type: Number, description :`user id that you want to be deleted`})
  @Delete('delete')
  deleteUser(@Query('userID') userID) {
      return this.usersServices.delete(userID);
  }
  @Put('update')
  updateUser(@Body() user: UpdateUserDto) {
      return this.usersServices.update(user);
  }
}
