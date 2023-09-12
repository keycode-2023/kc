import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

class BaseEntity {
  @DeleteDateColumn({
    type: 'timestamptz',
  })
  deletedAt?: Date;

  @CreateDateColumn({
    type: 'timestamptz',
  })
  createdAt?: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
  })
  updatedAt?: Date;
}

export default BaseEntity;
