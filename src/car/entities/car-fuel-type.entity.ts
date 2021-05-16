import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity('car_fuel_types')
export class CarFuelType {
  @PrimaryGeneratedColumn() id: string;

  @Column({nullable: false})
  name: string;
}