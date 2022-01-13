import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity('car_fuel_types')
export class CarFuelTypeEntity {
  @PrimaryGeneratedColumn() id: string;

  @Column({nullable: false})
  name: string;

  @Column({nullable: false})
  system_name: string;

  constructor(pet?: Partial<CarFuelTypeEntity>) {
    Object.assign(this, pet);
  }
}