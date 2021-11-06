import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty, ApiBody } from '@nestjs/swagger';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  premium: boolean;
}
