import {Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {DetailVideoAttachEntity} from "./detail-video-attach.entity";
import {DetailLinkEntity} from "./detail-link.entity";
import {DetailTypeEntity} from "./detail-type.entity";
import {CarEntity} from "../../car/entities/car.entity";

@Entity('details')
export class DetailEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @OneToOne(() => DetailTypeEntity)
  @JoinColumn({name: 'detailTypeId'})
  detailType: DetailTypeEntity;
  @Column({nullable: false})
  detailTypeId: string;

  @ManyToOne(() => CarEntity)
  @JoinColumn({name: 'carId'})
  car: CarEntity;
  @Column({nullable: false})
  carId: string;

  @Column({nullable: true})
  photoPath: string;

  @Column()
  purchasePrice: string;

  @Column()
  finishPrice: string;

  @Column()
  sellingPrice: string;

  @OneToOne(() => DetailVideoAttachEntity)
  @JoinColumn({name: 'videoAttachmentId'})
  videoAttachment: DetailVideoAttachEntity;

  @OneToMany(() => DetailLinkEntity, link => link.detail)
  links: DetailLinkEntity[];

  constructor(pet?: Partial<DetailEntity>) {
    Object.assign(this, pet);
  }
}