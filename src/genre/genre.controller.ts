
import { Body, Controller, Get, Post, Delete, Put, Query } from '@nestjs/common';
import GenreService from './genre.service';
import CreateGenreDto from './dto/create-genre.dto';
import UpdateGenreDto from './dto/update-genre.dto';
import {ApiQuery } from '@nestjs/swagger';

@Controller('genre')
export default class GenreController {
  constructor(private readonly genreServices: GenreService) {}
  @Post('post')
  postGenre( @Body() genre: CreateGenreDto) {
    return this.genreServices.insert(genre);
  }
  @Get()
  getAll() {
    return this.genreServices.getAllGenre();
  }
  @ApiQuery({ name: 'genre_id', required: true, type: Number, description: `genre id that you want to be deleted`})
  @Delete('delete')
  deleteGenre(@Query('genre_id') genreID) {
    return this.genreServices.delete(genreID);
  }
  @Put('update')
  updateGenre(@Body() genre: UpdateGenreDto) {
      return this.genreServices.update(genre);
    }
}