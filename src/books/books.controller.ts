import { Body, Controller, Get, Post, Header, Delete, Put, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import CreateBookDto from './dto/create-book.dto';
import {ApiQuery } from '@nestjs/swagger';
import UpdateBookDto from './dto/update-book.dto';

@Controller('book')
export default class BooksController {
  constructor(private readonly bookServices: BooksService) {}
  
  @Header('Content-Type', 'application/json')
  @Post('post')
  postUser( @Body() book: CreateBookDto) {
        return this.bookServices.insert(book);
  }

  @Get()
  getAll() {
    return this.bookServices.getAllBooks();
  }

  @ApiQuery({ name: 'book_id', required: true, type: Number, description: `book id that you want to be deleted`})
  @Delete('delete')
  deleteBook(@Query('book_id') bookID) {
    return this.bookServices.delete(bookID);
  }
  
  @Put('update')
  updateBook(@Body() book: UpdateBookDto) {
      return this.bookServices.update(book);
    }
}