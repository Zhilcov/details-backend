import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('car_body_types')
export class CarBodyTypeEntity {
  @PrimaryGeneratedColumn() id: string;

  @Column({nullable: false})
  name: string;

  @Column({nullable: false})
  system_name: string;

  constructor(pet?: Partial<CarBodyTypeEntity>) {
    Object.assign(this, pet);
  }
}