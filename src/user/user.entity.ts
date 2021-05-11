import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  @ObjectIdColumn() id: ObjectID;
  @Column() public login: string;
  @Column() public password: string;
  // @Column() pictureUrl?: string;
  // @Column() birthDate?: Date;

  constructor(pet?: Partial<User>) {
    Object.assign(this, pet);
  }
}