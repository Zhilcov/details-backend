import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('detail_types')
export class DetailTypeEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;
}