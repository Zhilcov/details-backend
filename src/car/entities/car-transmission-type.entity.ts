import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('car_transmission_types')
export class CarTransmissionTypeEntity {
  @PrimaryGeneratedColumn() id: string;

  @Column({nullable: false})
  name: string;

  @Column({nullable: false})
  system_name: string;

  constructor(pet?: Partial<CarTransmissionTypeEntity>) {
    Object.assign(this, pet);
  }
}