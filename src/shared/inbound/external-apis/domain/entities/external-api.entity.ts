import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('external_apis')
export class ExternalAPI {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ name: 'name' })
  public name: string;

  @Column({ name: 'token' })
  public token: string;

  @Column({ name: 'expiration_date' })
  public expirationDate: Date;
}
