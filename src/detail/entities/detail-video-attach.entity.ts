import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";


@Entity('details_video_attachment_types')
export class DetailVideoAttachType {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  value: string;
}

@Entity('details_video_attachment')
export class DetailVideoAttachEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @OneToOne(() => DetailVideoAttachType)
  @JoinColumn({name: 'attachmentTypeId'})
  type: DetailVideoAttachType;

  @Column()
  value: string;
}
