import {
  Entity,
  Column,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from "typeorm";
import {CarModel} from "./car-model.entity";
import {CarBrand} from "./car-brand.entity";
import {CarFuelTypeEntity} from "./car-fuel-type.entity";
import {CarBodyTypeEntity} from "./car-body-type.entity";
import {CarTransmissionTypeEntity} from "./car-transmission-type.entity";

@Entity('cars')
export class CarEntity {
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

  @OneToOne(() => CarFuelTypeEntity)
  @JoinColumn({
    name: 'fuelId',
  })
  fuelType: CarFuelTypeEntity;

  @OneToOne(() => CarBodyTypeEntity)
  @JoinColumn({
    name: 'bodyTypeId',
  })
  bodyType: CarBodyTypeEntity;

  @OneToOne(() => CarTransmissionTypeEntity)
  @JoinColumn({
    name: 'transmissionTypeId',
  })
  carTransmissionType: CarTransmissionTypeEntity;



  constructor(pet?: Partial<CarEntity>) {
    Object.assign(this, pet);
  }
}