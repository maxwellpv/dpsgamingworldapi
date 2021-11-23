import { User } from '../entities/user.entity';

export interface UsersInterfaceService {
  findAll(): Promise<User[]>;

  findOne(id: string): Promise<User>;

  createUser(user: User): Promise<User>;
}
