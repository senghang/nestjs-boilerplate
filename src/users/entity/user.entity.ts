import { Column, Entity } from 'typeorm';
import { AuditEntity } from '../../common/audit/audit.entity';

@Entity('users')
export class User extends AuditEntity {
  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255, unique: true, nullable: true })
  username?: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description?: string;

  @Column({ name: 'is_admin', type: 'boolean', default: false })
  isAdmin: boolean;
}
