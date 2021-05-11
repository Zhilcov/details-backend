import {Entity, ObjectID, ObjectIdColumn, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity('car-brands')
export class CarBrand {

  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;


  constructor(pet?: Partial<CarBrand>) {
    Object.assign(this, pet);
  }
}