import {Entity, ObjectID, ObjectIdColumn, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity('car-models')
export class CarModel {

  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  constructor(pet?: Partial<CarModel>) {
    Object.assign(this, pet);
  }
}