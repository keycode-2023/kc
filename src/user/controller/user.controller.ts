import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../dto/CreateUser.dto';
import { User } from '../entity/user.entity';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() input: CreateUserDto): Promise<User> {
    return this.userService.createUser(input);
  }
}
