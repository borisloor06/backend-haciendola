import { Module } from '@nestjs/common';
import { ProductoService } from './product.service';
import { ProductoController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductoController],
  providers: [ProductoService],
})
export class ProductoModule {}
