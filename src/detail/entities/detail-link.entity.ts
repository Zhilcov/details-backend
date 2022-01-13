import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {DetailEntity} from "./detail.entity";

@Entity('detail_links')
export class DetailLinkEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  value: string;

  @ManyToOne(() => DetailEntity)
  @JoinColumn({
    name: 'detailId'
  })
  detail: DetailEntity;
}