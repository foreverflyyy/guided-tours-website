import {Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import {Excursion} from "../excursion/excursion.model";
import {Place} from "./place.model";

@Table({tableName: "excursion_places", createdAt: false, updatedAt: false})
export class ExcursionPlaces extends Model<ExcursionPlaces> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Excursion)
    @Column({type: DataType.INTEGER})
    excursionId: number;

    @ForeignKey(() => Place)
    @Column({type: DataType.INTEGER})
    placeId: number;
}