import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"
import { Book } from "./book.model"

//dizendo que é um provider
@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book) 
        private bookModel: typeof Book
    ) {} //repositorio de livros

    async getAll(): Promise<Book[]>{
        return this.bookModel.findAll()
    }

    async getOne(id: number): Promise<Book> {
        return this.bookModel.findByPk(id)
    }

    create(book : Book) {
        this.bookModel.create(book)
    }
         
    update(book: Book): Promise<[number, Book[]]> {
        return this.bookModel.update(book, {
            where: {
                id: book.id
            }
        }) //vai alterar apenas o livro desse id
    }

    async delete(id: number) {
        const book: Book = await this.getOne(id)
        book.destroy()
    }
    
} 
