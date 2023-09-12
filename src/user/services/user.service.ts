import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { User } from '../entity/user.entity';
import { CreateUserDto } from '../dto/CreateUser.dto';

@Injectable()
export class UserService {
  constructor(private readonly dataSource: DataSource) {}
  createUser(input: CreateUserDto): Promise<User> {
    const user: Partial<User> = {
      name: input.name,
      email: input.email,
    };

    return this.dataSource.getRepository(User).save(user);
  }
}
