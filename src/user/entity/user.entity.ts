import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import BaseEntity from '../../common/entity/base';

@Entity()

export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column()
  public name!: string;

  @Column({ nullable: true })
  public height?: string;

  @Column({ nullable: true })
  public weight?: string;

  @Column()
  public email!: string;

  @Column({ nullable: true })
  public enteredAt!: Date;

  @Column({ nullable: true })
  public exitedAt!: Date;
}
