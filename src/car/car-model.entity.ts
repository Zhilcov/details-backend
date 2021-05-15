import {Entity, ObjectID, ObjectIdColumn, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import {CarBrand} from "./car-brand.entity";

@Entity('car_models')
export class CarModel {

  @PrimaryGeneratedColumn() id: string;

  @Column({nullable: false})
  name: string;

  @Column({nullable: false})
  brandId: string;

  @ManyToOne(() => CarBrand, (carBrand: CarBrand) => carBrand.models)
  @JoinColumn({name: 'brandId'})
  brand: CarBrand;

  constructor(pet?: Partial<CarModel>) {
    Object.assign(this, pet);
  }
}