import {BelongsToMany, Column, DataType, Model, Table} from 'sequelize-typescript';
import {ApiProperty} from "@nestjs/swagger";
import {Place} from "../places/place.model";
import {ExcursionPlaces} from "../places/excursion-places.model";

interface ExcursionCreationAttrs {
    id: number;
    name: string;
    description: string;
    mainImage: string;
    price: string;
    images: string[];
}

@Table({tableName: "excursions"})
export class Excursion extends Model<Excursion, ExcursionCreationAttrs> {
    @ApiProperty({example: '1', description: 'Unique id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Гоффман', description: ''})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;

    @ApiProperty({example: 'Экскурсия о Гоффмане', description: ''})
    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @ApiProperty({example: 'http://image', description: ''})
    @Column({type: DataType.STRING, allowNull: false})
    mainImage: string;

    @ApiProperty({example: '1000', description: ''})
    @Column({type: DataType.STRING, allowNull: false})
    price: string;

    @ApiProperty({example: '1', description: ''})
    @Column({type: DataType.ARRAY(DataType.STRING), allowNull: false})
    images: string;

    @BelongsToMany(() => Place, () => ExcursionPlaces)
    places: Place[]
}