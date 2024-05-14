import { IsCurrency, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductoDto {
  @IsString()
  @IsNotEmpty()
  handle: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  sku: string;

  @IsNotEmpty()
  @IsNumber()
  grams: number;

  @IsNotEmpty()
  @IsNumber()
  stock: number;

  @IsNotEmpty()
  @IsCurrency()
  price: number;

  @IsNotEmpty()
  @IsCurrency()
  comparePrice: number;

  @IsString()
  @IsNotEmpty()
  barcode: string;
}
