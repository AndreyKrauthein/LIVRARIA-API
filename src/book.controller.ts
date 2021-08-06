import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Book } from "./book.model";
import { BookService } from "./book.service";

//dizendo que é um controller
@Controller('book')
export class BookController {

    //automaticamente instancer o service injetando no controller
    constructor(private bookService: BookService){}


    @Get()
    async getAll(): Promise<Book[]>{
        return this.bookService.getAll()
    }

    @Get(':id')
    async getOne(@Param() params): Promise<Book> {
        return this.bookService.getOne(params.id)
    }

    @Post()
    async create(@Body() book: Book) {
        this.bookService.create(book)
    }
    
    @Put()
    async update(@Body() book: Book): Promise<[number, Book[]]> {
        return this.bookService.update(book)
    }

    @Delete(":id")
    async delete(@Param() params){
        this.bookService.delete(params.id)
    }
}