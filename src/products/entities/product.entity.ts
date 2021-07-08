import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Entity,
} from 'typeorm';
// ORM Object Relation Mapper
@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  image_url: string;

  @Column()
  slug: string;

  @Column()
  price: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
