import {Entity, ObjectID, ObjectIdColumn, Column} from "typeorm";

@Entity('tokens')
export class Token {
  @Column()
  token: string;

  @ObjectIdColumn()
  uId: ObjectID;

  @Column()
  expireAt: string;

  constructor(pet?: Partial<Token>) {
    Object.assign(this, pet);
  }
}