import {BelongsToMany, Column, DataType, Model, Table} from 'sequelize-typescript';
import {Excursion} from "../excursion/excursion.model";
import {ExcursionPlaces} from "./excursion-places.model";

interface PLaceCreationAttrs {
    id: number;
    name: string;
    description: string;
    mainImage: string;
    price: string;
    images: string[];
}

@Table({tableName: "places"})
export class Place extends Model<Place, PLaceCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;

    @Column({type: DataType.STRING, allowNull: false})
    image: string;

    @BelongsToMany(() => Excursion, () => ExcursionPlaces)
    excursions: Excursion[]
}