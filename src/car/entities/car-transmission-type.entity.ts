import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('car_transmission_types')
export class CarTransmissionType {
  @PrimaryGeneratedColumn() id: string;

  @Column({nullable: false})
  name: string;
}