import { Body, Controller, Get, Post, Header, Delete, Put, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import CreateBookDto from './dto/create-book.dto';

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
}