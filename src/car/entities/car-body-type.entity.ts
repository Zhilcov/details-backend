import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('car_body_types')
export class CarBodyType {
  @PrimaryGeneratedColumn() id: string;

  @Column({nullable: false})
  name: string;
}