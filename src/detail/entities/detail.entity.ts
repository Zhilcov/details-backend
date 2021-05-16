import {Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {DetailVideoAttachEntity} from "./detail-video-attach.entity";
import {DetailLinkEntity} from "./detail-link.entity";
import {DetailTypeEntity} from "./detail-type.entity";

@Entity('details')
export class DetailEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @OneToOne(() => DetailTypeEntity)
  @JoinColumn({name: 'detailTypeId'})
  detailType: DetailTypeEntity;

  @Column()
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
}