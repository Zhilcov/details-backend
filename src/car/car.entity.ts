import {Entity, ObjectID, ObjectIdColumn, Column, OneToOne} from "typeorm";
import {CarFuelTypes} from "./enums/carFuelType";
import {CarBodyTypes} from "./enums/carBodyTypes";
import {TransmissionTypes} from "./enums/transmissionTypes";
import {CarModel} from "./car-model.entity";
import {CarBrand} from "./car-brand.entity";

@Entity('cars')
export class Car{
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  year: Date;

  @Column()
  engineVolume: number;

  @OneToOne(() => CarBrand)
  carBrand: CarBrand;

  @OneToOne(() => CarModel)
  carModel: CarModel;

  @Column()
  carFuelType: CarFuelTypes;

  @Column()
  carBodyType: CarBodyTypes;

  @Column()
  carTransmissionType: TransmissionTypes;

  constructor(pet?: Partial<Car>) {
    Object.assign(this, pet);
  }
}