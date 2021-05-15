import {Entity, ObjectID, ObjectIdColumn, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import {CarModel} from "./car-model.entity";

@Entity('car_brands')
export class CarBrand {

  @PrimaryGeneratedColumn() id: string;

  @Column()
  name: string;

  @OneToMany(() => CarModel, model => model.brand)
  models: CarModel[];

  constructor(pet?: Partial<CarBrand>) {
    Object.assign(this, pet);
  }
}