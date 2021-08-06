import { Table, Column, DataType, Model  } from "sequelize-typescript"

@Table //importado do sequelize (representar uma tabela usando esse model)
export class Book extends Model<Book>{
    @Column({
        type: DataType.STRING(60),
        allowNull: false
    })
    code: string
    
    @Column({
        type: DataType.STRING(),
        allowNull: false
    })
    name: string

    @Column({
        type: DataType.DECIMAL(10, 2), //10 digitos com 2 casas decimais
        allowNull: false
    })
    price: number
}