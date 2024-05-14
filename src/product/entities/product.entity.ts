import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  handle: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  sku: string;

  @Column()
  grams: number;

  @Column()
  stock: number;

  @Column()
  price: number;

  @Column()
  comparePrice: number;

  @Column()
  barcode: string;
}
