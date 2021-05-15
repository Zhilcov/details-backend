import {Entity, ObjectID, ObjectIdColumn, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {Token} from "../token/token.entity";

@Entity({name: 'users'})
export class User {
  @PrimaryGeneratedColumn() id: string;

  @Column() public login: string;
  @Column() public password: string;
  // @Column() pictureUrl?: string;
  // @Column() birthDate?: Date;

  @OneToMany(() => Token, token => token.user)
  tokens: Token[];

  constructor(pet?: Partial<User>) {
    Object.assign(this, pet);
  }
}