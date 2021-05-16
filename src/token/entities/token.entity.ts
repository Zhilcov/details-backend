import {Entity, ObjectID, ObjectIdColumn, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import {User} from "../../user/entities/user.entity";

@Entity('tokens')
export class Token {
  @PrimaryGeneratedColumn() id: string;

  @Column()
  token: string;

  @ManyToOne(() => User, user => user.tokens)
  user: User;

  @Column()
  expireAt: string;

  constructor(pet?: Partial<Token>) {
    Object.assign(this, pet);
  }
}