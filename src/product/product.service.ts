import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-product.dto';
import { UpdateProductoDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  create(createProductoDto: CreateProductoDto) {
    return this.productRepository.save(createProductoDto);
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: number) {
    return this.productRepository.findOneBy({ id });
  }

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    await this.existsBy(id);
    return this.productRepository.update(id, updateProductoDto);
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }

  async existsBy(handle) {
    const exists = await this.productRepository.existsBy({ handle });
    if (!exists) {
      throw new NotFoundException();
    }
    return exists;
  }
}
