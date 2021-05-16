import {
  Entity,
  ObjectID,
  ObjectIdColumn,
  Column,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToMany, JoinTable
} from "typeorm";
import {CarFuelTypes} from "../enums/carFuelType";
import {CarBodyTypes} from "../enums/carBodyTypes";
import {TransmissionTypes} from "../enums/transmissionTypes";
import {CarModel} from "./car-model.entity";
import {CarBrand} from "./car-brand.entity";
import {CarFuelType} from "./car-fuel-type.entity";
import {CarBodyType} from "./car-body-type.entity";
import {CarTransmissionType} from "./car-transmission-type.entity";

@Entity('cars')
export class Car {
  @PrimaryGeneratedColumn() id: string;

  @Column()
  year: Date;

  @Column()
  engineVolume: string;

  @OneToOne(() => CarBrand)
  @JoinColumn({name: 'carBrandId'})
  carBrand: CarBrand;

  @OneToOne(() => CarModel)
  @JoinColumn({name: 'carModelId'})
  carModel: CarModel;

  @OneToOne(() => CarFuelType)
  @JoinColumn({
    name: 'fuelId',
  })
  fuelType: CarFuelType;

  @OneToOne(() => CarBodyType)
  @JoinColumn({
    name: 'bodyTypeId',
  })
  bodyType: CarBodyType;

  @OneToOne(() => CarTransmissionType)
  @JoinColumn({
    name: 'transmissionTypeId',
  })
  carTransmissionType: CarTransmissionType;

  constructor(pet?: Partial<Car>) {
    Object.assign(this, pet);
  }
}