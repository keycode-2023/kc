import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUserDto } from '../dto/CreateUser.dto';
import { UserService } from '../services/user.service';
import { User } from '../entity/user.entity';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation()
  async createUser(@Args('input') input: CreateUserDto): Promise<User> {
    return this.userService.createUser(input);
  }
}
